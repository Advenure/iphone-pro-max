
import HeroSectionBlogs from "../components/heroSectionblogs/page";
import ProductSlider from "../components/productblogstwo/page";
import ProductOne from "../components/productone/page";
import ProductThree from "../components/productthree/page";

export default function AllBlogs(){
    return(
        <div>
        
            <HeroSectionBlogs/>
            <ProductOne/>
            <ProductSlider/>
            <ProductThree/>
         
        </div>
    )
}