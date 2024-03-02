function newsletterForm() {
  return `
  <form id="add-newsletter-form" class="uui-footer02_form">
  <input
    type="email"
    id="input-newsletter-email"
    class="uui-form_input w-input"
    maxlength="256"
    placeholder="Enter your email"
    required=""
  />
  <button
    type="submit"
    id="btn-newsletter-add-form"
    class="uui-button is-button-small w-button"
  >
    Subscribe
  </button>
</form>
  `;
}

function footer() {
  return `
  <div
  data-w-id="5bf44bd6-19a3-d974-dcf1-e2e7da6c3d3c"
  class="section no-bottom-padding clip"
>
  <div class="wrapper-corner">
    <footer class="uui-footer02_component">
      <div class="uui-page-padding">
        <div class="uui-container-large">
          <div class="uui-padding-vertical-xlarge">
            <div class="w-layout-grid uui-footer02_top-wrapper">
              <div class="w-layout-grid uui-footer02_left-wrapper">
                <a
                  id="w-node-_5bf44bd6-19a3-d974-dcf1-e2e7da6c3d44-da6c3d3c"
                  href="/"
                  class="uui-footer02_logo-link w-inline-block"
                >
                  <div class="uui-logo_component">
                    <div class="uui-logo_logomark">
                      <img
                        src="images/Logomark.svg"
                        loading="lazy"
                        alt=""
                        class="uui-styleguide_logomark-bg"
                      />
                      <div class="uui-logo_logomark-blur"></div>
                    </div>
                    <img
                      src="images/Logo.svg"
                      loading="lazy"
                      alt="Untitled UI logotext"
                      class="uui-logo_logotype"
                    /><img
                      src="images/untitled-ui-logo.png"
                      loading="lazy"
                      alt="Logo"
                      class="uui-logo_image"
                    />
                  </div>
                </a>
                <div class="uui-footer02_link-list">
                  <div class="uui-footer02_link-list-heading">Product</div>
                  <a
                    href="solutions"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>Solutions</div>
                    <div class="uui-badge-small-success">
                      <div>New</div>
                    </div>
                  </a>
                  <a href="price" class="uui-footer02_link w-inline-block">
                    <div>Pricing</div>
                  </a>
                  <a
                    href="resources"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>Releases</div>
                  </a>
                </div>
                <div class="uui-footer02_link-list">
                  <div class="uui-footer02_link-list-heading">Company</div>
                  <a
                    href="company"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>About us</div>
                  </a>
                  <a
                    href="resources"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>News</div>
                  </a>
                  <a
                    href="contact"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>Contact</div>
                  </a>
                </div>
                <div class="uui-footer02_link-list">
                  <div class="uui-footer02_link-list-heading">Resources</div>
                  <a
                    href="resources"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>Blog</div>
                  </a>
                  <a
                    href="resources"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>Events</div>
                  </a>
                  <a
                    href="resources"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>Help centre</div>
                  </a>
                  <a
                    href="resources"
                    class="uui-footer02_link w-inline-block"
                  >
                    <div>Support</div>
                  </a>
                </div>
              </div>
              <div class="uui-footer02_right-wrapper">
                <div class="uui-footer02_heading">Join our newsletter</div>
                <div class="uui-text-size-small">
                  Join our newsletter to stay up to date on releases.
                </div>
                <div class="uui-footer02_form-block w-form">
                  ${newsletterForm()}
                  <div class="uui-text-size-small">
                    We care about your data in our
                    <a href="#" class="uui-text-style-link">privacy policy</a>.
                  </div>
                </div>
              </div>
            </div>
            <div class="uui-footer02_bottom-wrapper">
              <div class="uui-footer02_legal-list-wrapper">
                <div class="uui-text-size-small text-color-gray500">
                  © 2023 Sampul Sdn. Bhd.
                </div>
                <div class="w-layout-grid uui-footer02_legal-list">
                  <a href="/policy" class="uui-footer02_legal-link">Terms</a>
                  <a href="/policy" class="uui-footer02_legal-link">Privacy</a>
                  <a href="/policy" class="uui-footer02_legal-link">Cookies</a>
                </div>
              </div>
              <div class="w-layout-grid uui-footer02_social-list">
                <a
                  href="https://www.facebook.com/hellosampul"
                  class="uui-footer02_social-link w-inline-block"
                >
                  <div class="uui-footer02_social-icon w-embed">
                    <svg
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#" class="uui-footer02_social-link w-inline-block">
                  <div class="uui-footer02_social-icon w-embed">
                    <svg
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#" class="uui-footer02_social-link w-inline-block">
                  <div class="uui-footer02_social-icon w-embed">
                    <svg
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/sampul"
                  class="uui-footer02_social-link w-inline-block"
                >
                  <div class="uui-footer02_social-icon w-embed">
                    <svg
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
  `;
}

const STATIC_PUBLIC_HOST = 'https://sampul.co';

function newsletterFormAddAPI() {
  document
    .getElementById('add-newsletter-form')
    .addEventListener('submit', async function (event) {
      event.preventDefault();

      let useBtn = document.getElementById('btn-newsletter-add-form');
      let defaultBtnText = useBtn.innerHTML;
      useBtn.disabled = true;
      useBtn.innerHTML = spinnerLoading(useBtn.innerHTML);

      var email_input = document.getElementById('input-newsletter-email');

      try {
        const response = await fetch(
          `${STATIC_PUBLIC_HOST}/api/newsletter/subscribe`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email_input,
            }),
          }
        );

        if (!response.ok) {
          showToast('alert-toast-container', 'Something went wrong!', 'danger');
          useBtn.disabled = false;
          useBtn.innerHTML = defaultBtnText;

          return;
        }

        showToast('alert-toast-container', 'Subscribed!', 'success');
      } catch (error) {
        showToast('alert-toast-container', error.message, 'danger');
        useBtn.disabled = false;
        useBtn.innerHTML = defaultBtnText;
      }

      useBtn.disabled = false;
      useBtn.innerHTML = defaultBtnText;
    });
}
