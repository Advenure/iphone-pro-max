
import NationalBlogs from "./components/blogs/page";
import HeroSection from "./components/heroSection/page";
import HeroSectionBlogs from "./components/heroSectionblogs/page";
import HeroSectionLast from "./components/lastherosection/page";
import ProductSlider from "./components/productblogstwo/page";
import ProductOne from "./components/productone/page";
import ProductThree from "./components/productthree/page";
export default function Home(){
  return(
    <div>

<HeroSection/>
<HeroSectionBlogs/>
<NationalBlogs/>
<ProductOne/>
<ProductSlider/>
<ProductThree/>
<HeroSectionLast/>

    </div>
  )
}