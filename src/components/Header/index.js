import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaFax,
  FaInfoCircle,
} from "react-icons/fa";
import Purchase from "../Purchase";

export default function Header({ headerInfo }) {
  return (
    <header cy-validation="header-wrapper" className="header-format">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 mb-3 mb-md-0">
          <Purchase number={headerInfo.number} serial={headerInfo.serial} />
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-6">
          <div className="d-flex flex-column align-items-sm-start align-items-center ml-3">
            <h1 cy-validation="header-buyer" className="text-xxxl fw-600 mb-2">
              {headerInfo.buyer}
            </h1>
            <div className="d-flex align-items-center mb-2">
              <p cy-validation="header-contact-name" className="mr-xl-2">
                <FaUsers
                  cy-validation="header-icon-users"
                  className="color-secundary icon-md mr-1"
                />
                {headerInfo.contact.name}
              </p>
              <FaInfoCircle
                cy-validation="header-icon-info-circle"
                className="color-secundary icon-md"
              />
            </div>

            <div className="d-flex flex-column flex-xl-row">
              <p
                cy-validation="header-contact-email"
                className="d-flex align-items-center mr-xl-4 mb-2"
              >
                <FaEnvelope
                  cy-validation="header-icon-email"
                  className="color-secundary icon-md mr-1"
                />
                {headerInfo.contact.email}
              </p>
              <div className="d-flex">
                <p
                  cy-validation="header-contact-phone"
                  className="d-flex align-items-center mr-xl-2 mb-2 mr-2"
                >
                  <FaPhone
                    cy-validation="header-icon-phone"
                    className="color-secundary icon-md mr-1"
                  />
                  {headerInfo.contact.phone}
                </p>
                <p
                  cy-validation="header-contact-fax"
                  className="d-flex align-items-center mr-xl-2 mb-2"
                >
                  <FaFax
                    cy-validation="header-icon-fax"
                    className="color-secundary icon-md mr-1"
                  />
                  {headerInfo.contact.fax}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="d-flex flex-column align-items-sm-end align-items-center pr-0 pr-sm-3">
            <h1 cy-validation="header-price" className="text-xxxl fw-600 mb-2">
              {`USD ${headerInfo.price}`}
            </h1>
            <strong
              cy-validation="header-status"
              className="text-lg color-golden fw-600 mb-2"
            >
              {headerInfo.status}
            </strong>
            <p cy-validation="header-createdat" className="text-sm">
              {`Created on ${moment(headerInfo.createdAt).format(
                "MM/DD/YYYY"
              )}`}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  headerInfo: PropTypes.object,
};

Header.propTypes = {
  headerInfo: PropTypes.shape({
    buyer: PropTypes.string,
    contact: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      fax: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    currency: PropTypes.string,
    number: PropTypes.number,
    price: PropTypes.number,
    serial: PropTypes.number,
    status: PropTypes.string,
  }),
};
