import { useEffect, useRef, useState } from 'react';
import { supabase } from '../utils/supabase';
import { useUser } from '../context/user';
import Loading from '../components/Laoding';
import toast from 'react-hot-toast';
import {
  belovedLevel,
  instructionsAfterDeath,
  relationships,
  servicePlatforms,
} from '../constant/enum';
import { formatTimestamp } from '../utils/helpers';
import Link from 'next/link';
import DigitalSummaryCard from '../components/DigitalSummaryCard';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import BelovedModal from '../components/BelovedModal';
import { addUserImg, emptyUserImg } from '../constant/element';
import WillActionButtons from '../components/WillActionButtons';
import WillCertCard from '../components/WillCertCard';
import WillDetailsCard from '../components/WillDetailsCard';

const Beloved = () => {
  const { user, isLoading } = useUser();
  const cardRef = useRef(null);

  const [summary, setSummary] = useState({
    data: { will: null, beloved: [], digitalAssets: [] },
    isReady: false,
  });

  const [runEffect, setRunEffect] = useState(false);
  const [qrValue, setQrValue] = useState(null);

  const fetchWillData = async () => {
    const { data, error } = await supabase
      .from('wills')
      .select(`*, profiles ( * )`)
      .eq('uuid', user.uuid)
      .single();

    if (error) {
      toast.error(error.message);
    }

    return data;
  };

  const fetchBelovedData = async () => {
    const { data, error } = await supabase
      .from('beloved')
      .select('*')
      .eq('uuid', user.uuid);

    if (error) {
      toast.error(error.message);
    }

    return data;
  };

  const fetchDigitalAssetsData = async () => {
    const { data, error } = await supabase
      .from('digital_assets')
      .select('*')
      .eq('uuid', user.uuid);

    if (error) {
      toast.error(error.message);
    }

    return data;
  };

  const getWill = async () => {
    try {
      const [willData, belovedData, digitalAssetsData] = await Promise.all([
        fetchWillData(),
        fetchBelovedData(),
        fetchDigitalAssetsData(),
      ]);

      setSummary({
        data: {
          will: willData,
          beloved: belovedData,
          digitalAssets: digitalAssetsData,
        },
        isReady: true,
      });
    } catch (error) {
      setSummary({
        data: null,
        isReady: true,
      });
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!runEffect && user.uuid !== null) {
      setRunEffect(true);
      getWill();
    }
  }, [user, runEffect]);

  const title = () => {
    return (
      <>
        <div class="row">
          <div class="col-lg">
            <div class="content-text">
              <div class="smpl_display-sm-semibold">
                Review your draft wasiat/will
              </div>
            </div>
            <div class="smpl_text-md-regular">
              {summary.data.will?.last_updated
                ? ` Last wasiat/will generated: ${formatTimestamp(
                    summary.data.will?.last_updated
                  )}`
                : ''}
            </div>
          </div>
          <div class="col text-end">
            <WillActionButtons
              setQrValue={setQrValue}
              cardRef={cardRef}
              viewOnly={false}
              refreshFunction={getWill}
            />
          </div>
        </div>
        <div class="border-top my-3"></div>
      </>
    );
  };

  const tabSection = () => {
    return (
      <>
        <ul
          class="nav nav-pills justify-content-center tab-background mt-3"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link smpl_text-sm-semibold active"
              id="pills-certificate-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-certificate"
              type="button"
              role="tab"
              aria-controls="pills-certificate"
              aria-selected="true"
            >
              Certificate
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link smpl_text-sm-semibold"
              id="pills-details-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-details"
              type="button"
              role="tab"
              aria-controls="pills-details"
              aria-selected="false"
            >
              Details
            </button>
          </li>
        </ul>
        <div
          class="tab-content mt-5"
          id="pills-tabContent"
          style={{ 'min-height': 300 }}
        >
          <div
            class="tab-pane fade show active"
            id="pills-certificate"
            role="tabpanel"
            aria-labelledby="pills-certificate-tab"
          >
            <WillCertCard
              willData={summary.data}
              qrValue={qrValue}
              cardRef={cardRef}
            />
          </div>
          <div
            class="tab-pane fade"
            id="pills-details"
            role="tabpanel"
            aria-labelledby="pills-details-tab"
          >
            <WillDetailsCard willData={summary.data} />
          </div>
        </div>
      </>
    );
  };

  return (
    <div class="body">
      <div class="content">
        <Breadcrumb pageName={'Wasiat/Will'} />
        <div class="mt-4">{title()}</div>
        {tabSection()}
      </div>
      <Footer />
    </div>
  );
};

export default Beloved;
