import "./Checkout.css";
// import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import axios from "axios";
import * as React from "react";
import { OutlinedInput } from "@mui/material";
import { InputLabel } from "@mui/material";

import { FormControl } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// import { useSelector, useDispatch } from 'react-redux';
// import { getUserError, getUserLoading, getUserSuccess } from '../../Features/Login/actions';
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Payment = () => {

  // const form = useRef();

  // const [mailDet, setMailDet] = useState({
  //   first_name: "",
  //   email: "",
  //   otp: "",
  // });

  // useEffect(() => { 
  //   getUserData();
  // }, []);

  // const { userData } = useSelector((state) => ({
  //   userData: state.loginState.userData,
  // }));

  // const dispatch = useDispatch();

  // function getUserData() {
  //     dispatch(getUserLoading());
  //     fetch("http://localhost:4500/login")
  //     .then((d) => d.json())
  //     .then((res) => {
  //         dispatch(getUserSuccess(res));
  //         setMailDet({
  //           first_name: res[res.length - 1].first_name,
  //           email: res[res.length - 1].email,
  //           otp: res[res.length - 1].otp,
  //         });
  //     })
  //     .catch((err) => {
  //         dispatch(getUserError());
  //     })
  // };

  // let emailData = {
  //   to_name: mailDet.first_name,
  //   to_email: mailDet.email,
  //   otp: mailDet.otp,
  // }

  // const sendEmail = () => {
  //   emailjs.send('service_e26pfww', 'template_g6k0bz8', emailData, 'user_yi6j031DkWe1zzrpAAMGh')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  const doneHandle = () => {
    console.log("done")
  }



  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  var [finaltotal, setFinal] = useState(0);
  // useEffect(() => {
  //   getData();
  // }, []);

  const [total, setTotal] = useState(9000);

  const [promonum, setPromonum] = useState("");

  const handlepromoChange = (e) => {
    setPromonum(e.target.value);
  };

  const handlepromoClick = () => {
  console.log("handleclick")
  };


  const handleInputData = (e) => {
    e.preventDefault();
    console.log("handledata")
  };

  const [style, setStyle] = useState("exper1");
  const [promo, setPromo] = useState("promoMin");
  const [checked, setChecked] = useState(true);
  const [productno, setProduct] = useState([]);
  // const [address, setAddress] = useState({});
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  const fetchItems = () => {
    // axios.get("http://localhost:4500/tweets").then((res) => {
    //   let addresss = res.data[res.data.length - 1];
    //   setAddress(addresss);
    // });
  };

  const [checkedq, setCheckedq] = useState(true);
  const [radio, setRadio] = useState(true);

  const handlePromo = () => {
    if (promo == "promoMin") {
      setPromo("promoMax");
    } else {
      setPromo("promoMin");
    }
  };
  const changeStyle = () => {
    setChecked(!checked);
    if (style == "exper") {
      setStyle("exper1");
    } else {
      setStyle("exper");
    }
  };
  const changeStyleq = () => {
    setCheckedq(!checkedq);
  };
  return (
    <div>
      <Navbar/>
      <div id="mainbox">
        <div id="box1">
          <div>
            <div id="headbox">

            <div className="box1">
              <LockOutlinedIcon sx={{fontSize: '26px'}} /> 
              <div className="box1Div1">
                Secure Checkout
              </div>
              <div className="box1Div2">
                powered by Borderfree
              </div>
            </div>

              <select id="langcheckout">
                <option value="EN">English</option>
                <option value="AF">Afrikaans</option>
                <option value="SQ">Albanian</option>
                <option value="AR">Arabic</option>
                <option value="HY">Armenian</option>
                <option value="EU">Basque</option>
                <option value="BN">Bengali</option>
                <option value="BG">Bulgarian</option>
                <option value="CA">Catalan</option>
                <option value="KM">Cambodian</option>
                <option value="ZH">Chinese (Mandarin)</option>
                <option value="HR">Croatian</option>
                <option value="CS">Czech</option>
                <option value="DA">Danish</option>
                <option value="NL">Dutch</option>

                <option value="ET">Estonian</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finnish</option>
                <option value="FR">French</option>
                <option value="KA">Georgian</option>
                <option value="DE">German</option>
                <option value="EL">Greek</option>
                <option value="GU">Gujarati</option>
                <option value="HE">Hebrew</option>
                <option value="HI">Hindi</option>
                <option value="HU">Hungarian</option>
                <option value="IS">Icelandic</option>
                <option value="ID">Indonesian</option>
                <option value="GA">Irish</option>
                <option value="IT">Italian</option>
                <option value="JA">Japanese</option>
                <option value="JW">Javanese</option>
                <option value="KO">Korean</option>
                <option value="LA">Latin</option>
                <option value="LV">Latvian</option>
                <option value="LT">Lithuanian</option>
                <option value="MK">Macedonian</option>
                <option value="MS">Malay</option>
                <option value="ML">Malayalam</option>
                <option value="MT">Maltese</option>
                <option value="MI">Maori</option>
                <option value="MR">Marathi</option>
                <option value="MN">Mongolian</option>
                <option value="NE">Nepali</option>
                <option value="NO">Norwegian</option>
                <option value="FA">Persian</option>
                <option value="PL">Polish</option>
                <option value="PT">Portuguese</option>
                <option value="PA">Punjabi</option>
                <option value="QU">Quechua</option>
                <option value="RO">Romanian</option>
                <option value="RU">Russian</option>
                <option value="SM">Samoan</option>
                <option value="SR">Serbian</option>
                <option value="SK">Slovak</option>
                <option value="SL">Slovenian</option>
                <option value="ES">Spanish</option>
                <option value="SW">Swahili</option>
                <option value="SV">Swedish </option>
                <option value="TA">Tamil</option>
                <option value="TT">Tatar</option>
                <option value="TE">Telugu</option>
                <option value="TH">Thai</option>
                <option value="BO">Tibetan</option>
                <option value="TO">Tonga</option>
                <option value="TR">Turkish</option>
                <option value="UK">Ukrainian</option>
                <option value="UR">Urdu</option>
                <option value="UZ">Uzbek</option>
                <option value="VI">Vietnamese</option>
                <option value="CY">Welsh</option>
                <option value="XH">Xhosa</option>
              </select>
            </div>
            <p id="lowerhead2">
              Already have a Borderfree account?
              <a href="" style={{ margin: "10px" }}>
                Click Here
              </a>
            </p>

            <div id="delboxinfo">

              <div className="delBox">
                <div className="newcircle"> &nbsp;1</div>
                <div id="newtitle">Delivery</div>
              </div>

              <div id="delAddress">
                <div>
                  <h4>DELIVERY ADDRESS:</h4>
                  <div id="addressinfo" className="delAddDet">
                    {/* {address.address} <br /> {address.city} {address.postal_code}{" "}
                    <br /> {address.country} */}
                  </div>
                </div>

                <div id="delMethod">
                  <h4>DELIVERY METHOD:</h4>
                  <p className="delAddDet">
                    Standard <br />
                    No additional import <br />
                    Charges at <br /> Delivery in
                    <br /> 11-21 Business days
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="payBox">
                <div className="newcircle2">2</div>
                <div id="newtitle">Payment</div>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  onClick={changeStyle}
                  checked={checked}
                />
                <label for="vehicle1">
                  My billing address is the same as my delivery address
                </label>
                <div className={style}>
                  <form action="">
                    <FormControl
                      size="medium"
                      className="inputstyle"
                      variant="outlined"
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-password"
                        sx={{ fontSize: "12px" }}
                      >
                        Email
                      </InputLabel>
                      <OutlinedInput
                       // onChange={handleChange}
                        name="email"
                        sx={{ fontSize: "12px" }}
                      />
                    </FormControl>

                    <div className="inputinfo">
                      <FormControl
                        size="medium"
                        variant="outlined"
                        sx={{
                          mr: "18px",
                          ml: "0px",
                          mt: "5%",
                          mb: "10px",
                          width: "45%",
                        }}
                        id="first_name"
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          sx={{ fontSize: "12px" }}
                        >
                          First Name
                        </InputLabel>
                        <OutlinedInput
                         // onChange={handleChange}
                          name="first_name"
                          label="First Name"
                          sx={{ fontSize: "12px" }}
                        />
                      </FormControl>
                      <FormControl
                        size="medium"
                        variant="outlined"
                        sx={{
                          mr: "0px",
                          ml: "18px",
                          mt: "5%",
                          mb: "10px",
                          width: "45%",
                        }}
                        id="last_name"
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          sx={{ fontSize: "12px" }}
                        >
                          Last Name
                        </InputLabel>
                        <OutlinedInput
                         // onChange={handleChange}
                          name="last_name"
                          label="Last Name"
                          sx={{ fontSize: "12px" }}
                        />
                      </FormControl>
                    </div>
                    <FormControl
                      size="medium"
                      variant="outlined"
                      sx={{
                        mt: "2%",

                        width: "95%",
                      }}
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-password"
                        sx={{ fontSize: "12px" }}
                      >
                        Address
                      </InputLabel>
                      <OutlinedInput
                       // onChange={handleChange}
                        name="address"
                        label="Address"
                        sx={{ fontSize: "12px" }}
                      />
                    </FormControl>

                    <div className="inputinfo">
                      <FormControl
                        size="medium"
                        variant="outlined"
                        sx={{
                          mr: "18px",
                          ml: "0px",
                          mt: "3%",
                          mb: "10px",
                          width: "45%",
                        }}
                        id="first_name"
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          sx={{ fontSize: "12px" }}
                        >
                          Address 2 (Optional)
                        </InputLabel>
                        <OutlinedInput
                          label="Address 2 (Optional)"
                          sx={{ fontSize: "12px" }}
                        />
                      </FormControl>
                      <FormControl
                        size="medium"
                        variant="outlined"
                        sx={{
                          mr: "0px",
                          ml: "18px",
                          mt: "3%",
                          mb: "10px",
                          width: "45%",
                        }}
                        id="last_name"
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          sx={{ fontSize: "12px" }}
                        >
                          Postal Code
                        </InputLabel>
                        <OutlinedInput
                         // onChange={handleChange}
                          name="postal_code"
                          label="Postal Code"
                          sx={{ fontSize: "12px" }}
                        />
                      </FormControl>
                    </div>
                    <div className="inputinfo">
                      <FormControl
                        size="medium"
                        variant="outlined"
                        sx={{
                          mr: "18px",
                          ml: "0px",
                          mt: "2%",
                          mb: "10px",
                          width: "45%",
                        }}
                        id="City"
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          sx={{ fontSize: "12px" }}
                        >
                          City
                        </InputLabel>
                        <OutlinedInput
                         // onChange={handleChange}
                          name="city"
                          label="City"
                          sx={{ fontSize: "12px" }}
                        />
                      </FormControl>
                      <FormControl
                        size="medium"
                        variant="outlined"
                        sx={{
                          mr: "0px",
                          ml: "18px",
                          mt: "2%",
                          mb: "10px",
                          width: "45%",
                        }}
                        id="last_name"
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          sx={{ fontSize: "12px" }}
                        >
                          Region (Optional)
                        </InputLabel>
                        <OutlinedInput
                          label="Region (Optional)"
                          sx={{ fontSize: "12px" }}
                        />
                      </FormControl>
                    </div>
                    <div className="inputinfo">
                      <FormControl
                        size="medium"
                        variant="outlined"
                        sx={{
                          mr: "18px",
                          ml: "0px",
                          mt: "2%",
                          mb: "10px",
                          width: "45%",
                        }}
                        id="Phone"
                      >
                        <InputLabel
                          htmlFor="outlined-adornment-password"
                          sx={{ fontSize: "12px" }}
                        >
                          Phone
                        </InputLabel>
                        <OutlinedInput
                         // onChange={handleChange}
                          name="phone"
                          label="Phone"
                          sx={{ fontSize: "12px" }}
                        />
                      </FormControl>

                      <select
                       // onChange={handleChange}
                        className="inputstyle1"
                        id="country"
                        name="country"
                      >
                        <option>Select Country</option>
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antigua & Barbuda">
                          Antigua & Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire">Bonaire</option>
                        <option value="Bosnia & Herzegovina">
                          Bosnia & Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Ter">
                          British Indian Ocean Ter
                        </option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Canary Islands">Canary Islands</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Channel Islands">Channel Islands</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos Island">Cocos Island</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote DIvoire">Cote DIvoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curaco">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">
                          Falkland Islands
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Ter">
                          French Southern Ter
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Great Britain">Great Britain</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="India">India</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea North">Korea North</option>
                        <option value="Korea Sout">Korea South</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Midway Islands">Midway Islands</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Nambia">Nambia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherland Antilles">
                          Netherland Antilles
                        </option>
                        <option value="Netherlands">
                          Netherlands (Holland, Europe)
                        </option>
                        <option value="Nevis">Nevis</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau Island">Palau Island</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Phillipines">Philippines</option>
                        <option value="Pitcairn Island">Pitcairn Island</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Montenegro">
                          Republic of Montenegro
                        </option>
                        <option value="Republic of Serbia">
                          Republic of Serbia
                        </option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="St Barthelemy">St Barthelemy</option>
                        <option value="St Eustatius">St Eustatius</option>
                        <option value="St Helena">St Helena</option>
                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                        <option value="St Lucia">St Lucia</option>
                        <option value="St Maarten">St Maarten</option>
                        <option value="St Pierre & Miquelon">
                          St Pierre & Miquelon
                        </option>
                        <option value="St Vincent & Grenadines">
                          St Vincent & Grenadines
                        </option>
                        <option value="Saipan">Saipan</option>
                        <option value="Samoa">Samoa</option>
                        <option value="Samoa American">Samoa American</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome & Principe">
                          Sao Tome & Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Tahiti">Tahiti</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad & Tobago">
                          Trinidad & Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks & Caicos Is">
                          Turks & Caicos Is
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Erimates">
                          United Arab Emirates
                        </option>
                        <option value="United States of America">
                          United States of America
                        </option>
                        <option value="Uraguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City State">
                          Vatican City State
                        </option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Virgin Islands (Brit)">
                          Virgin Islands (Brit)
                        </option>
                        <option value="Virgin Islands (USA)">
                          Virgin Islands (USA)
                        </option>
                        <option value="Wake Island">Wake Island</option>
                        <option value="Wallis & Futana Is">
                          Wallis & Futana Is
                        </option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zaire">Zaire</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>

                    <a href="/payment" style={{ margin: "10px" }}>
                      <input
                        onClick={handleInputData}
                        id="submitBtn"
                        type="submit"
                        value="Update"
                      />
                    </a>
                  </form>
                </div>
                
                <div className="allCardDet">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    checked={radio}
                  />
                  <label for="html" className="creditFlex" >
                    Credit or Debit Card{" "}
                    <img
                      id="visa"
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </label>

                  <div id="carddetaill">
                    <input
                      className="carddetails inputstylecard"
                      type="number"
                      placeholder="Card Number"
                    />

                    <div className="carddetails">
                      <input
                        className="inputstyle3"
                        type="string"
                        placeholder="MM/YY"
                      />

                      <input
                        className="inputstyle3"
                        id="code"
                        type="number"
                        placeholder="Security Code"
                      />
                    </div>
                  </div>
                 
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    onClick={changeStyleq}
                    checked={checkedq}
                  />
                  <label>
                    Send me electronic or mail offers from Borderfree. You may
                    opt out at any time.
                  </label>
                </div>
              </div>
            </div>
            <div>
              <a href="/OTP" style={{ margin: "10px" }}>
                <button id="submitBtn"  Click Here>
                  Place Order
                </button>
              </a>
            </div>
            <div className="lastVal">
              This order total is 100% guaranteed. There will be no additional
              charges due upon receipt.
            </div>
          </div>
        </div>

        <div id="box2">
          <div>
            <div id="rightPromoBox">
            
              <div className="box1">
                <ShoppingCartOutlinedIcon sx={{fontSize: '50px', paddingLeft: '18px'}} /> 
                <div className="box1Div1">
                Your Order
                </div>
              </div>

              <a href="/payment" style={{ margin: "10px" }}>
                <button onClick={handleInputData} id="submitBtn1">
                  Place Order
                </button>{" "}
              </a>

              <div className="priceSummary">
                <div className="leftSummaryBox">
                  <div>Items</div>
                  <div>Shipping</div>
                  <div>Duties</div>
                  <div>TOTAL</div>
                </div>
                <div className="rightSummaryBox">
                  <div>₹totalprice</div>
                  <div>₹2000</div>
                  <div>₹2000</div>
                  <div>₹45000</div>
                </div>
              </div>

              <hr />
              <p id="Promo" onClick={handlePromo}>
                + Promo Code
              </p>
              <div id={promo}>
                <input
                  onChange={handlepromoChange}
                  className="inputstyle2"
                  type="text"
                  placeholder="Enter Promo Code"
                />
                <button onClick={handlepromoClick} className="promobtn">
                  Apply
                </button>
              </div>
              <hr />
            </div>
            <div>
              {/* {products.map((e) => (
                <div className="prodinfo">
                  <img src={e.images[0]} alt="" className="prodimg" />
                  <div className="proddess">
                    <p className="prodtext1">{e.name}</p>
              
                    <p className="prodtext2">₹{e.price}</p>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
