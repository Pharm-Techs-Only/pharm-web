import React from 'react'

const Donate = () => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="7GBTQGRFFDF96" />
      <input type="submit" name="submit" value="Donate to Support PTO!" className="bg-yellow-500 px-8 h-12 rounded-[4px] cursor-pointer" />
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  )
}

export default Donate
