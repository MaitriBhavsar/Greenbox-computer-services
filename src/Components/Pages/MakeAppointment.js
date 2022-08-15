import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'semantic-ui-react';
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { parsePhoneNumber } from 'react-phone-number-input';

function MakeAppointment() {
  const initialValues = {
    name: "",
    email: "",
    phonenumber: "",
    subject: "",
    messanger: "",
  }
  const [values, setValues] = useState(initialValues);
  const [Valid, setValid] = useState(false);

  const handleInputChange = (e) => {
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert('123')
  //     setValues(initialValues);

  //     validData();

  //     // if(values.subject == '') {
  //     //     setValid(true);
  //     // }
  //     // if(values.messanger == '') {
  //     //     setValid(true);
  //     // }
  //     if (Valid == false) {
  //         emailjs.sendForm('service_nzx4wzv', 'template_cthl6j2', e.target, 'Suqzh9m3KXcTxvD31')
  //             .then((result) => {
  //                 console.log('resultresult', result.text);
  //             }, (error) => {
  //                 console.log('errorerror', error.text);
  //             });
  //     }
  // }

  // const validData = () => {
  //     if (values.name == '') {
  //         setValid(true);
  //     }

  //     if (values.email == '') {
  //         setValid(true);
  //     }

  //     if (values.phonenumber == '') {
  //         setValid(true);
  //     }
  // }

  // const formValidation = () => {
  //     const nameErr = {};
  //     let isValid = true;

  // }

  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const onSubmit = (data) => {
    // if()
    console.log('data, data', data);
  }

  const onPhoneValidate = (value) => {
    if (value == undefined) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <div id="inner_banner" className="section inner_banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="title-holder">
                  <div className="title-holder-cell text-left">
                    <h1 className="page-title">Make	Appointment</h1>
                    <ol className="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li className="active">Make	Appointment</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section padding_layout_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12"></div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="full">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="main_heading text_align_center">
                      <h2>Make	Appointment</h2>
                    </div>
                  </div>
                  <div className="form_section">
                    <Form className="form_contant" onSubmit={handleSubmit(onSubmit)} >
                      <fieldset>
                        <div className="row">
                          <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <Form.Field>
                              <input
                                className="field_custom"
                                placeholder='Your name'
                                type="text"
                                name="name"
                                onChange={handleInputChange}
                                {...register("name", { required: true, maxLength: 10 })}
                              />
                            </Form.Field>
                            {errors.name && <p className="text-error form-err">Please enter name</p>}

                            {/* <input className="field_custom" placeholder="Your name" type="text" value={values.name} name="name" onChange={handleInputChange} />
                                                        {Valid ? <span style={{ color: "red" }}>Name is required</span> : ""} */}
                          </div>
                          <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <Form.Field>
                              <input
                                className="field_custom"
                                placeholder='Email Address'
                                type="email"
                                name="email"
                                onChange={handleInputChange}
                                {...register("email", { required: true })}
                              />
                            </Form.Field>
                            {errors.email && <p className="text-error form-err">Please enter email</p>}
                            {/* <input className="field_custom" placeholder="Email adress" type="email" value={values.email} name="email" onChange={handleInputChange} />
                                                        {Valid ? <span style={{ color: "red" }}>Email is required</span> : ""} */}

                          </div>
                          <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            {/* <Form.Field>
                                                            <input
                                                                className="field_custom"
                                                                placeholder='Phone Number'
                                                                type="number"
                                                                name="phonenumber"
                                                                onChange={handleInputChange}
                                                                {...register("phonenumber", { required: true, maxLength: 10 })}
                                                            />
                                                        </Form.Field>
                                                        {errors.phonenumber && <p className="text-error form-err">Please enter phone number</p>} */}
                            {/* <input className="field_custom" placeholder="Phone number" type="text" value={values.phonenumber} name="phonenumber" onChange={handleInputChange} />
                                                        {Valid ? <span style={{ color: "red" }}>Phone number is required</span> : ""} */}
                            {/* <label htmlFor="phone-input">Phone Number</label> */}
                            <Controller
                              name="phone-input"
                              control={control}
                              rules={{
                                validate: (value) =>
                                  // {
                                  // console.log('value', value)
                                  onPhoneValidate(value)
                                // {value == undefined ? '' : ''}
                                // {value == undefined ? 'false' : isValidPhoneNumber(value)}
                                // }
                              }}
                              render={({ field: { onChange, value } }) => (
                                <PhoneInput
                                  className="field_custom"

                                  value={value}
                                  onChange={onChange}
                                  defaultCountry="IN"
                                  id="phone-input"
                                />
                              )}
                            />
                            {errors["phone-input"] && (
                              <p className="error-message form-err">Invalid Phone Number</p>
                            )}
                          </div>
                          <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <Form.Field>
                              <input
                                className="field_custom"
                                placeholder='Subject'
                                type="text"
                                name="subject"
                                onChange={handleInputChange}
                                {...register("subject")}
                              />
                            </Form.Field>
                            {/* {errors.subject && <p className="text-error">Please enter subject</p>} */}

                            {/* <input className="field_custom" placeholder="Subject" type="text" value={values.subject} name="subject" onChange={handleInputChange} /> */}

                          </div>
                          <div className="field col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Form.Field>
                              <textarea
                                className="field_custom"
                                placeholder='Messager'
                                type="text"
                                name="messanger"
                                onChange={handleInputChange}
                                {...register("messanger")}
                              />
                            </Form.Field>
                            {/* {errors.messanger && <p className="text-error">Please enter message</p>} */}
                            {/* <textarea className="field_custom" placeholder="Messager" value={values.messanger} name="messanger" onChange={handleInputChange}  ></textarea> */}

                          </div>
                          <div className="center">
                            <button className="btn main_bt" type='submit'>SUBMIT NOW</button>
                          </div>
                        </div>
                      </fieldset>
                    </Form>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MakeAppointment