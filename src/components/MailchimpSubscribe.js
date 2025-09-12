import React, { useState } from 'react'

const MailchimpSubscribe = ({ 
  containerClasses = "",
  inputClasses = "block required email bg-white rounded-[4px] h-[84px] w-full shadow-[0_4px_4px_0_rgba(0,0,0,0.11)] px-[30px] leading-[84px] mb-[12px]",
  buttonClasses = "!w-full h-[79px] justify-center border-[1.5px] border-[var(--color-pharm-green)] rounded-[4px] bg-gradient-to-b from-[#6BCE53] to-[#63E044] hover:bg-[#63E044] cursor text-white px-8 py-3 !m-0 min-w-full font-medium transition-colors",
  buttonText = "Subscribe",
  layout = "vertical", // "vertical" or "horizontal"
  inputContainerClasses = ""
}) => {
  const [userType, setUserType] = useState('pharmtech')
  return (
    <div className={containerClasses}>
      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <style type="text/css">{`
          #mc_embed_signup{clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%; max-width: 600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}</style>
        <div id="mc_embed_signup" className="lg:mx-0 mx-auto">
          <form action="https://pharmtechsonly.us10.list-manage.com/subscribe/post?u=647acc4c58e278ba9635c4a4b&amp;id=6fa4d8c02e&amp;f_id=005a48e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" rel="noreferrer">
              <div id="mc_embed_signup_scroll">
                  <div className={layout === "horizontal" ? "mc-field-group flex max-w-md" : "mc-field-group"}>
                    <input 
                      type="email" 
                      name="EMAIL" 
                      className={inputClasses} 
                      id="mce-EMAIL" 
                      required="" 
                      placeholder="Email address"
                    />
                  </div>
                  
                  {/* Radio button group for user type */}
                  <div className="mc-field-group mb-4">
                    <div className="flex flex-col space-y-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="user-type"
                          value="pharmtech"
                          checked={userType === 'pharmtech'}
                          onChange={(e) => setUserType(e.target.value)}
                          className="h-4 w-4 text-[var(--color-pharm-green)] border-gray-300 focus:ring-[var(--color-pharm-green)]"
                        />
                        <span className="text-gray-700 font-medium">Pharm Tech</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="user-type"
                          value="employer"
                          checked={userType === 'employer'}
                          onChange={(e) => setUserType(e.target.value)}
                          className="h-4 w-4 text-[var(--color-pharm-green)] border-gray-300 focus:ring-[var(--color-pharm-green)]"
                        />
                        <span className="text-gray-700 font-medium">Employer</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Hidden field to send the tag to Mailchimp */}
                  <input type="hidden" name="MERGE7" value={userType} />
              <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                  <div className="response" id="mce-success-response" style={{display: "none"}}></div>
              </div>
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <input type="text" name="b_647acc4c58e278ba9635c4a4b_6fa4d8c02e" tabIndex="-1" value="" />
              </div>
              <div className="clear foot">
                <input type="submit" value={buttonText} name="subscribe" id="mc-embedded-subscribe" className={buttonClasses} />
              </div>
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
