import QRCode from 'react-qr-code';

const WillCertCard = ({ willData, qrValue, cardRef }) => {
  const will_settings = {
    muslim: {
      title: 'Wasiat',
      from: `ditulis oleh`,
      info: `Salinan sijil dan perincian penuh wasiat boleh didapati dalam peti simpanan digital Sampul. Sebarang maklumat dan pertanyaan, sila emel kepada ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
    },
    non_muslim: {
      title: 'Will & Testator for Digital Asset',
      from: 'of',
      info: `A copy of this certificate & details of the will is stored in Sampul digital vault. For queries and info please email ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
    },
  };

  const myInfo = {
    nric_name: willData.will?.nric_name
      ? willData.will.nric_name
      : '[YOUR NAME]',
    will_code: willData.will?.will_code ? willData.will.will_code : '[ID]',
  };

  const checkReligion = () => {
    if (willData.will?.profiles?.religion == 'islam') {
      return 'muslim';
    } else {
      return 'non_muslim';
    }
  };

  return (
    <>
      <div class="wasiat-cert-preview" id="certificate-container">
        <div class="wasiat-cert_content p-3">
          <div class="wasiat-cert_wrapper">
            <div class="wasiat-cert_content-top">
              <img
                loading="lazy"
                src={`${process.env.NEXT_PUBLIC_CDNUR_IMAGE_WEBSITE}/sampul_logo.png`}
                alt=""
                id="sampul-will-logo"
              ></img>
            </div>
            <div class="wasiat-cert_content-centre">
              <h2 class="heading-xsmall centre">
                {will_settings[checkReligion()].title}
              </h2>
              <div class="space-medium"></div>
              <div class="text-size-medium centre">
                {will_settings[checkReligion()].from}
              </div>
              <div class="space-medium"></div>
              <div class="heading-xsmall centre text--color-sampul">
                <span>{myInfo.nric_name}</span>
              </div>
              <div class="space-medium"></div>
              <div class="text-size-medium centre">
                Will ID :{' '}
                <span id="view-certificate-will-code">{myInfo.will_code}</span>
              </div>
              <div class="space-xxsmall"></div>
              <div class="text-size-medium centre">
                Safekeep your digital asset - For your loved ones{' '}
                {process.env.NEXT_PUBLIC_HOST}
              </div>
              <div class="space-medium"></div>
              <div class="text-size-medium centre">
                {will_settings[checkReligion()].info}
              </div>
              <div class="bar-divider"></div>
            </div>
            <div class="wasiat-cert_content-bottom">
              <div ref={cardRef}>
                {qrValue !== null ? (
                  <QRCode
                    title="Sampul"
                    value={qrValue}
                    bgColor={'#FFFFFF'}
                    fgColor={'#000000'}
                    size={150}
                  />
                ) : (
                  <img
                    width="150"
                    loading="lazy"
                    src={`${process.env.NEXT_PUBLIC_CDNUR_IMAGE}/${willData.will?.image_path}`}
                    alt=""
                  />
                )}
              </div>
              <div class="wasiat-cert_content-centre">
                <div class="space-xxsmall"></div>
                <div class="text-size-medium centre">Powered by Sampul</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WillCertCard;
