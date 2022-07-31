import styled from "styled-components";

export const PageNewsWrapper = styled.div`
.list-news{
    width: 100%;
    padding: 20px 75px;
    display: flex;
    list-style-type: none;
    .item-news{
        a{
            padding: 10px 20px;
            background-color: #eee;
            color: #000;
            font-size: 1.2rem;
            font-weight: 500;
        }
        &:hover a{
           color: #fff;
           background-color: #fe0000;
        }
    }
}
 
.recruit{
    width: 100%;
    height: 80vh;
    padding: 0 75px;
    margin-bottom: 20px;
    display: flex;
    
}
.recruit-left{
    width: 65%;
    position: relative;
}
.image-recruit{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.coating{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.content-recruit{
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: #fff;
    h2{
        font-weight: 500;
        font-size: 1.3rem;
    }
}
.time{
    display: inline-block;
    margin-top: 20px;
    font-size: 1.2rem;
}
.recruit-right{
    width: 35%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.wrapper_recruit-right{
    height: calc((100% - 20px) / 2);
    position: relative;
}



.list-posts{
    padding: 0 75px;
    width: 100%;
    display: flex;
}
.list_posts-left{
    width: 65%;
}

.wrapper-post{
    width: 100%;
}
.title-post{
    text-decoration: none;
    color: #fff;
    display: block;
    border-bottom: 2px solid #365899;
}
.title-post h2{
    padding: 10px 20px;
   display: inline-block;
    text-align: center;
    background-color: #365899;
    font-size: 1.2rem;
    font-weight: 500;
}
.content-post{
    display: flex;
    padding: 10px 0;
}
.content_post-left{
    width: 50%;
    margin-right: 10px;
}
.image-post{
    width: 100%;
}
.image-post img{
    width: 100%;
    object-fit: cover;
}
.content_post-left a {
    text-decoration: none;
}
.content_post-left a h3{
    color: #000;
    font-size: 1.3rem;
    margin: 10px 0;
    font-weight: 500;
}
.content_post-left a span{
    color: #999;
    font-size: 1.2rem;
}
.list_content-post_right{
    width: 50%;
    list-style-type: none;
}
.item_post-right{
    margin-bottom: 20px;
}
.item_post-right a{
    text-decoration: none;
    display: flex;
}
.image_item-post{
    width: 40%;
    height: 90px;
}
.image_item-post img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title_item-post{
    width: 60%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.title_item-post h3{
    line-height: 20px;
    color: #000;
    margin-bottom: 10px;
    font-size: 1.1rem;
    font-weight: 500;
}
.title_item-post span{
    color: #999;
    font-size: 1.2rem;
}

.list_posts-right{
    margin-left: 20px;
    width: 35%;
}

.content_posts-right{
    width: 100%;
    flex-direction: column;
}
.content_posts-right .content_post-left,
.content_posts-right .list_content-post_right{
    width: 100%;
    margin-bottom: 10px;
}
.list_most-view{
    margin-top: 10px;
    list-style-type: none;
}
.item_most-view{
    border-bottom: 1px solid #eee;
    padding: 10px 0;
}
.item_most-view a{
    text-decoration: none;
    color: #000;
}
.item_most-view a span{
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 10px;
    color: #999;
    font-style: italic;
}
`