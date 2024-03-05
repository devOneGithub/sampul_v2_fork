import Link from 'next/link';
import Loading from './Laoding';
import { addUserImg, emptyUserImg } from '../constant/element';
import { countries, maritalStatus, religions } from '../constant/enum';
import { useUser } from '../context/user';
import { supabase } from '../utils/supabase';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  mapViewElements,
  processForm,
  replaceOrAddImage,
} from '../utils/helpers';
import toast from 'react-hot-toast';
import UserDetailsModal from './UserDetailsModal';

const MyDetails = ({ isModal = false }) => {
  const { user } = useUser();
  const router = useRouter();
  const [runEffect, setRunEffect] = useState(false);
  const [summary, setSummary] = useState({
    data: [],
    isReady: false,
  });
  const [selectedUser, setSelectedUser] = useState({
    userDetails: null,
  });

  useEffect(() => {
    if (!runEffect && user?.uuid) {
      setRunEffect(true);
      getProfiles();
    }
  }, [user, runEffect]);

  const getProfiles = async () => {
    setSummary({
      ...summary,
      isReady: false,
    });

    const { data, error } = await supabase
      .from('profiles')
      .select('*, accounts (*), roles (*), beloved (*)');

    if (error) {
      setSummary({
        ...summary,
        isReady: true,
      });
      toast.error(error.message);
      return;
    }

    setSummary({
      ...summary,
      data: data,
      isReady: false,
    });
  };

  const openUserModal = (item) => {
    setSelectedUser({
      ...selectedUser,
      userDetails: item,
    });

    try {
      $('#user-details-modal')?.modal('show');
    } catch (error) {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <div class="mt-3">
      <UserDetailsModal
        selectedUser={selectedUser.userDetails}
        refreshFunction={getProfiles}
      />
      <div class="table-responsive" style={{ width: '100%' }}>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <small class="smpl_text-xs-medium">Account</small>
              </th>

              <th scope="col">
                <small class="smpl_text-xs-medium">Role</small>
              </th>

              <th scope="col">
                <small class="smpl_text-xs-medium">Total beloved</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {summary?.data.map((item, index) => {
              const userImg = item?.image_path
                ? `${process.env.NEXT_PUBLIC_CDNUR_IMAGE}/${item.image_path}`
                : emptyUserImg;

              return (
                <tr
                  key={index}
                  onClick={() => {
                    openUserModal(item);
                  }}
                >
                  <td>
                    <div class="custom-table-cell">
                      <img
                        loading="lazy"
                        src={userImg}
                        alt=""
                        class="avatar-8"
                      />
                      <div>
                        <div class="smpl_text-sm-medium crop-text">
                          {item.username}
                        </div>
                        <div class="smpl_text-sm-regular crop-text">
                          {item.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="custom-table-cell">
                      <div class="smpl_text-sm-regular crop-text">
                        {item.roles.role}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="custom-table-cell">
                      <div class="smpl_text-sm-regular crop-text">
                        {item.beloved.length}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDetails;
