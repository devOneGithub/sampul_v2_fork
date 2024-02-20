import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { useUser } from '../context/user';
import Loading from '../components/Laoding';
import toast from 'react-hot-toast';
import { instructionsAfterDeath, servicePlatforms } from '../constant/enum';
import { mapViewElements } from '../utils/helpers';
import Link from 'next/link';
import DigitalSummaryCard from '../components/DigitalSummaryCard';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import DigitalAssetsModal from '../components/DigitalAssetsModal';
import { addUserImg } from '../constant/element';
import DigitalAssetsCard from '../components/DigitalAssetsCard';

const DigitalAssets = () => {
  const { user, isLoading } = useUser();
  const [summary, setSummary] = useState({
    data: [],
    isReady: false,
  });
  const [belovedList, setBelovedList] = useState({
    data: [],
    isReady: false,
  });
  const [isReady, setIsReady] = useState(true);
  const [runEffect, setRunEffect] = useState(false);
  const [digitalAssetsModalType, setDigitalAssetsModalType] = useState({
    key: 'add',
    selectedItem: null,
  });

  const getDigitalAssets = async () => {
    const { data, error } = await supabase
      .from('digital_assets')
      .select('*')
      .eq('uuid', user.uuid)
      .order('created_at', { ascending: false });

    if (error) {
      setSummary({
        data: [],
        isReady: true,
      });
      toast.error(error.message);
      return;
    }

    setSummary({
      data: data,
      isReady: true,
    });
  };

  const getBeloved = async () => {
    const { data, error } = await supabase
      .from('beloved')
      .select('*')
      .eq('uuid', user.uuid);

    if (error) {
      setBelovedList({
        data: [],
        isReady: true,
      });
      toast.error(error.message);
      return;
    }

    const modifiedData = data.map((item) => ({
      value: item.id,
      name: item.nric_name,
    }));

    setBelovedList({
      data: modifiedData,
      isReady: true,
    });
  };

  useEffect(() => {
    if (!runEffect && user.uuid !== null) {
      setRunEffect(true);
      getDigitalAssets();
      getBeloved();
    }
  }, [user, runEffect]);

  const digitalAssetsModal = (item) => {
    $('#digital-assets-modal')?.modal('show');

    setDigitalAssetsModalType({
      key: item ? 'edit' : 'add',
      selectedItem: item ? item : null,
    });

    const inputElements = {
      digital_assets_modal: {
        username: document.getElementById('input-digital-assets-username'),
        email: document.getElementById('input-digital-assets-email'),
        service_platform: document.getElementById(
          'select-digital-assets-service-platform'
        ),
        account_type: document.getElementById('select-digital-assets-type'),
        frequency: document.getElementById('select-digital-assets-frequency'),
        declared_value_myr: document.getElementById(
          'input-digital-assets-declared-value'
        ),
        instructions_after_death: document.getElementById(
          'select-digital-assets-instructions-after-death'
        ),
        beloved_id: document.getElementById('select-digital-assets-beloved'),
        remarks: document.getElementById('input-digital-assets-remarks'),
      },
    };

    for (const key in inputElements.digital_assets_modal) {
      if (key == 'image_path') {
        inputElements.digital_assets_modal[key].src = addUserImg;
      } else {
        inputElements.digital_assets_modal[key].value = '';
      }
    }

    if (item) {
      for (const key in inputElements.digital_assets_modal) {
        inputElements.digital_assets_modal[key].value = item[key];

        if (key == 'image_path') {
          const imageUrl = item[key]
            ? `${process.env.NEXT_PUBLIC_CDNURL}${item[key]}`
            : addUserImg;
          inputElements.digital_assets_modal.image_path.src = imageUrl;
        }
      }
    }
  };

  const title = () => {
    return (
      <>
        <div class="row">
          <div class="col-lg">
            <div class="content-text">
              <div class="smpl_display-sm-semibold">
                List down your Digital Assets
              </div>
            </div>
            <div class="smpl_text-md-regular">
              Ensure no assets left behind for your loved ones
            </div>
          </div>
          <div class="col text-end">
            <button
              type="button"
              class="btn btn-primary btn-lg btn-text"
              onClick={() => {
                digitalAssetsModal(null);
              }}
            >
              <Loading title="Add Digital Assets" loading={false} />
            </button>
          </div>
        </div>
        <div class="border-top my-3"></div>
      </>
    );
  };

  const tabSection = () => {
    return (
      <>
        <ul class="nav nav-pills justify-content-center tab-background">
          <li class="nav-item">
            <a
              class="nav-link active smpl_text-sm-semibold"
              data-bs-toggle="pill"
              href="#menu0"
            >
              View all
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link smpl_text-sm-semibold"
              data-bs-toggle="pill"
              href="#menu1"
            >
              Non-Subscription
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link smpl_text-sm-semibold"
              data-bs-toggle="pill"
              href="#menu2"
            >
              Subscription
            </a>
          </li>
        </ul>
        <div class="tab-content mt-5" style={{ 'min-height': 300 }}>
          <div class="tab-pane container active" id="menu0">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <DigitalAssetsCard
                typeName=""
                summary={summary}
                editFunction={digitalAssetsModal}
              />
            </div>
          </div>
          <div class="tab-pane container fade" id="menu1">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <DigitalAssetsCard
                typeName="non_subscription"
                summary={summary}
                editFunction={digitalAssetsModal}
              />
            </div>
          </div>
          <div class="tab-pane container fade" id="menu2">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <DigitalAssetsCard
                typeName="subscription"
                summary={summary}
                editFunction={digitalAssetsModal}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div class="body">
      <Breadcrumb pageName={'Digital Assets'} />
      <DigitalAssetsModal
        keyType={digitalAssetsModalType.key}
        selectedItem={digitalAssetsModalType.selectedItem}
        refreshFunction={getDigitalAssets}
        belovedList={belovedList.data}
      />
      <div class="mt-4">{title()}</div>
      {tabSection()}
      <Footer />
    </div>
  );
};

export default DigitalAssets;