import React from 'react'

const MailchimpSubscribe = ({ 
  title = "Join the Waitlist", 
  showTitle = true, 
  containerClasses = "bg-gray-50 p-6 rounded-lg",
  inputClasses = "required email",
  buttonClasses = "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors",
  buttonText = "Subscribe",
  layout = "vertical", // "vertical" or "horizontal"
  inputContainerClasses = ""
}) => {
  return (
    <div className={containerClasses}>
      {showTitle && <h3>{title}</h3>}
      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <style type="text/css">{`
          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%; max-width: 600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}</style>
        <div id="mc_embed_signup">
          <form action="https://pharmtechsonly.us10.list-manage.com/subscribe/post?u=647acc4c58e278ba9635c4a4b&amp;id=6fa4d8c02e&amp;f_id=005a48e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                  <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                  <div className={layout === "horizontal" ? "mc-field-group flex max-w-md" : "mc-field-group"}>
                    {layout === "vertical" && <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>}
                    <input 
                      type="email" 
                      name="EMAIL" 
                      className={inputClasses} 
                      id="mce-EMAIL" 
                      required="" 
                      placeholder={layout === "horizontal" ? "Enter your email" : ""}
                    />
                    {layout === "horizontal" && (
                      <input type="submit" value={buttonText} name="subscribe" id="mc-embedded-subscribe" className={buttonClasses} />
                    )}
                  </div>
              <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                  <div className="response" id="mce-success-response" style={{display: "none"}}></div>
              </div>
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <input type="text" name="b_647acc4c58e278ba9635c4a4b_6fa4d8c02e" tabIndex="-1" value="" />
              </div>
              {layout === "vertical" && (
                <div className="clear foot">
                  <input type="submit" value={buttonText} name="subscribe" id="mc-embedded-subscribe" className={buttonClasses} />
                </div>
              )}
            </div>
          </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='COMPANY';ftypes[6]='text';fnames[7]='MERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='text';}(jQuery));var $mcj = jQuery.noConflict(true);`
          }}
        />
      </div>
    </div>
  )
}

export default MailchimpSubscribe
