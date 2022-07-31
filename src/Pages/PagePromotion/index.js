import React,{useEffect} from "react";
import ListPromotion from "../../Components/ListPromotion";

const PagePromotion = ({listPromotion}) => {
    useEffect(() => {
        document.title = "Khuyến Mại"
      }, [])
    return (
        <ListPromotion listPromotion={listPromotion} />
    )
}

export default PagePromotion