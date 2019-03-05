import React, { Component, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import Site_Logo from'../../assets/register_template/image/SEAC logo.png';

function Page(data) {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  console.log(data);

  const textStyle = {
    padding:'0 0 10px 0',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div>
        <div className="text-center" style={textStyle}>
          <a className="" onClick={() => changeLanguage('th')}>ภาษาไทย</a>
          &nbsp;|&nbsp;
          <a className="" onClick={() => changeLanguage('en')}>English</a>
        </div>
      <form className="sky-form" role="form" method="POST" >
        <header>
          <div className="text-center">
            <img src={Site_Logo} width="150px"/>
          </div>
          <div className="text-center">
            {t('title')}
          </div>
        </header>

        <fieldset>
          <section>
            <div className="text-center">
              Thank you for registering to participate in this learning event. Please complete the fields below. We will accept applicants on a first-come-first-served basis. Following your registration we will contact you within 7 days to confirm your participation
            </div>
          </section>
        </fieldset>

        <fieldset>
          <div className="row">
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="first_name" placeholder={t('first_name')} type="text" />
              </label>
            </section>
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="last_name" placeholder={t('last_name')} type="text" />
              </label>
            </section>
          </div>

          <div className="row">

            <section className="col col-6">
              <label className="select">
                <select name="age">
                  <option value="0" >{t('age')}</option>
                  <option value="15" >15</option>
                  <option value="16" >16</option>
                </select>

                <i></i>
              </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="gender">
                  <option value="0" >{t('gender')}</option>
                  <option value="1" >Male</option>
                  <option value="2" >Female</option>
                </select>

                <i></i>
              </label>
            </section>
          </div>
        </fieldset>

        <fieldset>
          <div className="row">
            <section className="col col-12">
              <label className="input">
                <i className="icon-prepend icon-university"></i>
                <input name="university" placeholder={t('university')} type="text" />
              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-6">
              <label className="input">
              <input name="faculty" placeholder={t('faculty')} type="text" />
              </label>
            </section>
            <section className="col col-6">
              <label className="input">
              <input name="major" placeholder={t('major')} type="text" />

              </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="Year_of_college">
                  <option value="0" >{t('Year_of_college')}</option>
                  <option value="1" >Freshman (ปีหนึ่ง)</option>
                  <option value="2" >Sophomore (ปีสอง)</option>
                  <option value="3" >Junior (ปีสาม)</option>
                  <option value="4" >Senior (ปีสี่)</option>
                </select>

                <i></i>
              </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="English_Proficiency">
                  <option value="0" >{t('English_Proficiency')}</option>
                  <option value="1" >Fair</option>
                  <option value="2" >Good</option>
                  <option value="3" >Excellent</option>
                </select>

                <i></i>
              </label>
            </section>
          </div>
        </fieldset>

        <fieldset>

          <div className="row">
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-mobile-phone"></i>
                <input name="mobile" placeholder={t('mobile')} type="tel" />

              </label>
            </section>
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-phone"></i>
                <input name="line_id" placeholder={t('line_id')} type="text" />

              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-envelope-alt"></i>
                <input name="email" placeholder={t('email')} type="email" />
                <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>

              </label>
            </section>
            <section className="col col-6">
              <label className="input" >
                <i className="icon-prepend icon-envelope-alt"></i>
                <input name="email_confirmation" placeholder={t('email_confirmation')} type="email" />
                <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>

              </label>
            </section>
          </div>

        </fieldset>

        <footer>
          <button type="submit" className="button">{t('submit')}</button>
        </footer>
      </form>
    </div>
  );
}

// loading component for suspence fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);


const SurveyPage = ({
  data
}) => {

  return (
    <Suspense fallback={<Loader />}>
      <Page data={data} fun="fun" />
    </Suspense>
  );
}

export default SurveyPage
