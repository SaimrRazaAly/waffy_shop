import Text_Image_Comp from "@/Components/Text_Image_Comp"

const { default: Page_Hero_Banner } = require("@/Components/Page_Hero_Banner")


const About_Page = () => {
  return (
    <>
<Page_Hero_Banner title={"About us"}/>
<Text_Image_Comp/>
    </>
  )
}

export default About_Page