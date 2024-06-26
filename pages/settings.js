import Billing from '../components/Billing';
import Breadcrumb from '../components/Breadcrumb';
import DangerZone from '../components/DangerZone';
import Footer from '../components/Footer';
import InformDeath from '../components/InformDeath';
import MyDetails from '../components/MyDetails';
import Password from '../components/Password';
import SideBar from '../components/SideBar';
import UnderMaintenance from '../components/UnderMaintenance';
import { systemLanguages } from '../constant/enum';
import { useApi } from '../context/api';
// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Settings = () => {
  const router = useRouter();
  // const { contextApiData } = useApi();

  useEffect(() => {
    if (router.isReady && document) {
      setTimeout(() => {
        const activeTab = router.query.tab;

        if (activeTab) {
          const tab = document.getElementById(activeTab);
          if (tab) {
            tab.click();
          }
        }
      }, 500);
    }
  }, [router.isReady]);

  // useEffect(() => {
  //   if (contextApiData.profile.data) {
  //     const langNow = contextApiData.profile?.data?.system_language; // malay
  //     const lObject = systemLanguages().find((x) => x.value === langNow);
  //     const currentPage = router.pathname;
  //     const currentPath = router.asPath.replace(/^\/[^/]+/, '');
  //     if (lObject?.langCode) {
  //       router.push(`/${lObject.langCode}${currentPath}/${currentPage}`);
  //     }
  //   }
  // }, [contextApiData.profile]);

  const title = () => {
    return (
      <>
        <div class="row text-md-start text-center">
          <div class="col-lg">
            <div class="smpl_display-sm-semibold">Settings</div>
            <div class="smpl_text-md-regular">
              Manage your account settings here
            </div>
          </div>
          <div class="col text-end"></div>
        </div>
        {/* <div class="border-top my-3"></div> */}
      </>
    );
  };

  const tabSection = () => {
    return (
      <div class="project-tab">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-my-details-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-my-details"
              type="button"
              role="tab"
              aria-controls="nav-my-details"
              aria-selected="true"
            >
              My details
            </button>
            <button
              class="nav-link"
              id="nav-password-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-password"
              type="button"
              role="tab"
              aria-controls="nav-password"
              aria-selected="false"
            >
              Password
            </button>
            <button
              class="nav-link"
              id="nav-inform-death-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-inform-death"
              type="button"
              role="tab"
              aria-controls="nav-inform-death"
              aria-selected="false"
            >
              Inform Death
            </button>
            <button
              class="nav-link"
              id="nav-billing-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-billing"
              type="button"
              role="tab"
              aria-controls="nav-billing"
              aria-selected="false"
            >
              Billing
            </button>
            <button
              class="nav-link"
              id="nav-danger-zone-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-danger-zone"
              type="button"
              role="tab"
              aria-controls="nav-danger-zone"
              aria-selected="false"
            >
              Danger Zone
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-my-details"
            role="tabpanel"
            aria-labelledby="nav-my-details-tab"
          >
            <MyDetails />
          </div>
          <div
            class="tab-pane fade"
            id="nav-password"
            role="tabpanel"
            aria-labelledby="nav-password-tab"
          >
            <Password />
          </div>
          <div
            class="tab-pane fade"
            id="nav-inform-death"
            role="tabpanel"
            aria-labelledby="nav-inform-death-tab"
          >
            <InformDeath />
          </div>
          <div
            class="tab-pane fade"
            id="nav-billing"
            role="tabpanel"
            aria-labelledby="nav-billing-tab"
          >
            <Billing />
            {/* <UnderMaintenance /> */}
          </div>
          <div
            class="tab-pane fade"
            id="nav-danger-zone"
            role="tabpanel"
            aria-labelledby="nav-billing-tab"
          >
            <DangerZone />
          </div>
        </div>
      </div>
    );
  };

  return (
    <SideBar>
      <div class="body inner-body">
        <div class="content">
          <Breadcrumb pageName={'Settings'} />
          <div class="mt-4">{title()}</div>
          <div class="row mt-4">{tabSection()}</div>
        </div>
        <Footer />
      </div>
    </SideBar>
  );
};

// export const getStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? 'bm', ['common'])),
//     },
//   };
// };

export default Settings;

// The summary of this page includes:
// This page is designed to manage various aspects of a user's account.
// It includes different tabs such as "My details," "Password," "Inform Death," "Billing," and "Danger Zone,"
// each offering specific functionalities. It's also automatically selects and displays the tab specified in the URL.
