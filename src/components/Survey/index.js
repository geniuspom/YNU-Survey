import React, { Component, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import Site_Logo from'../../assets/register_template/image/SEAC logo.png';

import Year_values from '../../json/List.js';

function Page(data) {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

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
              <label className="input">
                <i className="icon-prepend icon-user"></i>
                <input name="nick_name" placeholder={t('nick_name')} type="text" />
              </label>
            </section>

            <section className="col col-6">
              <label className="input">
                <i className="icon-prepend icon-mobile-phone"></i>
                <input name="mobile" placeholder={t('mobile')} type="tel" />

              </label>
            </section>

          </div>

          <div className="row">

            <section className="col col-6">
              <label className="select">
                <select name="Birth_year">
                  <option value="0" >{t('Birth_year')}</option>
                  {
                    Year_values.map((Year_value) => (
                      <option key={Year_value.id} value={Year_value.id}>{Year_value.value}</option>
                    ))
                  }
                </select>
                <i></i>
              </label>
            </section>
            <section className="col col-6">
              <label className="select">
                <select name="gender">
                  <option value={t('gender.0')} >{t('gender.0')}</option>
                  <option value={t('gender.1')} >{t('gender.1')}</option>
                  <option value={t('gender.2')} >{t('gender.2')}</option>
                </select>
                <i></i>
              </label>
            </section>
          </div>

          <div className="row">

            <section className="col col-12">
              <label className="select">
                <select name="marital_status">
                  <option value={t('marital_status.0')} >{t('marital_status.0')}</option>
                  <option value={t('marital_status.1')} >{t('marital_status.1')}</option>
                  <option value={t('marital_status.2')} >{t('marital_status.2')}</option>
                </select>

                <i></i>
              </label>
            </section>

          </div>
          <div className="row">

            <section className="col col-12">
              <label className="input">
                <i className="icon-prepend fa-home"></i>
                <input name="province" placeholder={t('province')} type="tel" />

              </label>
            </section>
          </div>

        </fieldset>

        <fieldset>
          <div className="row">
            <section className="col col-12">
              <label className="input">
                <i className="icon-prepend fa-suitcase"></i>
                <input name="affiliation" placeholder={t('affiliation.0')} type="text" />
              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-12">
              <label className="input">
                <input name="company" placeholder={t('company')} type="text" />
              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-12">
              <label className="input">
                <input name="position" placeholder={t('position')} type="text" />
              </label>
            </section>
          </div>

        </fieldset>

        <fieldset>

          <div className="row">
            <section className="col col-12">
              <label className="label" >{t('what_learn_about')}</label>
                <label className="textarea">
  							<textarea rows="3" name="what_learn_about"></textarea>
  						</label>
            </section>
          </div>

          <div className="row">
            <section className="col col-12">
              <label className="label" >{t('where_about_ynu')}</label>
                <label className="textarea">
                <textarea rows="3" name="where_about_ynu"></textarea>
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

/*function Birth_year (){

  const { t, i18n } = useTranslation();
  //var data_value = <option value="0" >{t('Birth_year')}</option>
  let data_values = []

  for(let i = 1940; i <= 2490; i++){
    data_values => i
  }

  const tifOptions = Object.keys(data_values).map(data_value =>
    <option value={data_value}>{tifs[data_value]}</option>
  )

  return (
    //<option value="0" >{t('Birth_year')}</option>
    tifOptions
  )

}*/


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
