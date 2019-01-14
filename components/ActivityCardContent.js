import React from 'react'

const ActivityCardContent = () => (
  <div className="bottom-content">
    <style jsx>{`
      .pull-left {
        float: left!important;
      }

      .pull-right {
        float: right!important;
      }

      .location a, .duration a {
        text-decoration: none;
        color: #585858;
        font-family: Roboto,Arial,Sans-Serif;
        font-size: 14px;
      }

      .location span, .duration span {
        color: #989897;
        margin-left: 20px;
        font-size: 14px;
      }

      .duration span {
        margin-left: 24px;
      }

      .location img, .duration img {
        margin-right: 3px;
        width: auto !important;
        height: auto !important;
        position: absolute;
      }

      .clearfix {
        clear: both;
      }
      
      .link-container {
        margin-top: 15px;
      }

      .deal-url {
        font-size: 20px;
        font-weight: 400;
        color: black;
        text-overflow: ellipsis;
        word-wrap: normal;
        overflow: hidden;
        width: 100%;
        display: inline-block;
        height: 58px;
      }

      .bottom-info {
        min-height: 45px;
      }

      .yotpo {
        direction: LTR;
        clear: both;
        text-align: left;
      }

      .yotpo span {
        font-family: Open Sans;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal !important;
        font-size: 14px;
        line-height: 17px;
        color: #a2a2a2;
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        visibility: visible !important;
      }

      .yotpo div {
        font-family: Open Sans;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal !important;
        font-size: 14px;
        line-height: 17px;
        color: #a2a2a2;
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .star-clickable {
        cursor: pointer;
      }

      .yotpo .pull-left {
        text-align: left;
        float: left;
      }

      .yotpo-stars {
        padding: 0;
      }

      .yotpo-icon {
        speak: none;
        font-size: 17.5px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        width: auto !important;
        background: none;
        height: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "yotpo-widget-font" !important
      }

      .yotpo .yotpo-icon-star, .yotpo .yotpo-icon-half-star {
        font-size: 17.5px;
        color: #ffda45;
      }

      .bottom-info .price-info {
        text-align: right;
      }

      .bottom-info .price-info .old-price {
        color: #989897;
        height: 20px;
      }

      .bottom-info .price-info .overlined {
        margin-left: 3px;
      }

      .new-price {
        color: #4eb62a;
        font-size: 18px;
      }
    `}</style>
    <div className="top-icons top-stream-icons">
      <div className="pull-left">
        <div className="location">
          <a>
            <img src="https://www.backpackerdeals.com/imagesv3/icon-location.png" alt="location" />
            <span>Alice Springs, Australia</span>
          </a>
        </div>
      </div>
      <div className="pull-right">
        <div className="duration">
          <a>
            <img src="https://www.backpackerdeals.com/imagesv3/icon-duration.png" alt="duration" />
            <span>3 days 2 nights</span>
          </a>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
    <div className="link-container">
      <a 
        className="deal-url" 
        target="_blank" 
        href="https://www.backpackerdeals.com/australia/alice-springs/alice-springs-to-alice-springs-uluru-tour"
      >
        Alice Springs to Alice Springs Uluru Tour - 3 Days 2 Nights
      </a>
    </div>
    <div className="bottom-info">
      <div className="pull-left">
        <div className="rating">
          <div 
            className="yotpo bottomLine yotpo-small" 
            ata-appkey="3L1oF2nFye8y4SexpVc02tJACGjk6wnetqONiyM3" 
            data-product-id="5599" 
            data-name="Alice Springs to Alice Springs Uluru Tour - 3 Days 2 Nights" 
            data-yotpo-element-id="1"
          >
            <span className="yotpo-display-wrapper" style={{ visibility: 'hidden' }}>
              <div className="standalone-bottomline"> 
                <div className="yotpo-bottomline pull-left  star-clickable">  
                  <span className="yotpo-stars"> 
                    <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                    <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                    <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                    <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                    <span className="yotpo-icon yotpo-icon-half-star rating-star pull-left"></span> 
                  </span>  
                  <a className="text-m">87 Reviews</a>
                  <div className="yotpo-clr"></div>
                </div>
                <div className="yotpo-clr"></div>
              </div>   
              <div className="yotpo-clr"></div> 
            </span>
          </div>
        </div>
      </div>
      <div className="pull-right price-info">
        <div className="old-price">
          Value&nbsp;
          <span className="price-widget" data-currency="3" data-amount="395">
            <span className="currency">AUD $</span>
            <span className="price overlined">395</span>
          </span>
        </div>
        <div className="new-price">
          From&nbsp;
          <span className="price-widget" data-currency="3" data-amount="369">
            <span className="currency">AUD $</span>
            <span className="price">369</span>
          </span>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  </div>
)

export default ActivityCardContent