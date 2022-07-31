import {useState, useEffect} from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import {intersectionWith} from 'lodash'
import './App.css';
import './reset.css';
import {
  listDataMenu,
  listImageSlider,
  listImageSliderCategory,
  listProduct,
  listShowRoom,
  listPolicy,
  productArray,
  sliceArray,
  listButtonCaregory,
  listPromotion,
  listButtonNew,
  listMenuMobile} from './Data/data'
import Header from './Components/Header'
import HeaderMobile from './Components/HeaderMobile';
import PageHome from './Pages/PageHome'
import PageDetail from './Pages/PageDetail'
import PageLogin from './Pages/PageLogin'
import PageCart from './Pages/PageCart'
import PageCategory from './Pages/PageCategory';
import PageRegistration from './Pages/PageRegistration';
import PagePromotion from './Pages/PagePromotion';
import PageNews from './Pages/PageNews'
import PageInformationUser from './Pages/PageInformationUser';
import PageUpdateUser from './Pages/PageUpdateUser';
import PageAccountManagement from './Pages/PageAccountManagement';
import BackToTop from './Components/BackToTop';
import SocialBar from './Components/SocialBar';
import Footer from './Components/Footer';
import ScrollToTopRounter from './Components/ScrollToTopRounter'
import NotFount from './Pages/NotFount';
import PageSearch from './Pages/PageSearch';

function App() {
  const [listCart, setListCart ] = useState([])
  const [listUser, setListUser] = useState([])
  const [user, setUser] = useState({})


   //thêm giỏ hàng
  const hadleAddProduct = (product) => {
           const productExist = listCart.find(item => item.id === product.id)
           if(productExist){
            setListCart(listCart.map(item => item.id === product.id ? 
              {...productExist, quantity: productExist.quantity + 1}: item))
           }  else{
            setListCart([...listCart, {...product, quantity:1}])
           }
  }
  //tăng số lượng giỏ hàng
  const handleIncrementProduct = (idProduct) => {
    const newListCart = listCart.map(item => {
      if(item.id === idProduct) return {
        ...item, quantity: item.quantity + 1
      }
      return item
    })
    setListCart(newListCart)
  }
  //giảm số lượng giỏ hàng
  const handleDecrementProduct = (idProduct) => {
    const newListCart = listCart.map(item => {
      if(item.id === idProduct) return {
        ...item, quantity: item.quantity - 1
      }
      return item
    })
    setListCart(newListCart)
  }
  //xóa sản phẩm trong giỏ hàng
  const handleDelete = (idStudent) => {
    const newlist =  listCart.filter(item => item.id !== idStudent)
    setListCart(newlist)
  }
   
  //lấy userLogin
  
  const handleGetUser = (userLogin) =>{
     setUser(userLogin)
  }
  //  useEffect(() => {
  //   async function fetchPostUser() {
  //       try {
  //           const requestUrl =`https://62d6134e15ad24cbf2d06300.mockapi.io/nguoidung/${user.id}`
  //           const response = await fetch(requestUrl)
  //           const responseJSON = await response.json()
  //           setListUser(responseJSON)
  //       } catch (error){
  //           console.log('object', error.message);
  //       }
  //   }
  //   fetchPostUser();
  //   })
  //Đăng xuất
  const handleLogout =( ) => {
         setUser({})
  }
  return (
    <BrowserRouter>
    <ScrollToTopRounter />
      <div className="App" id='to-top' >
         <SocialBar />
         <Header listDataMenu={listDataMenu} productArray={productArray} listCart={listCart} user={user} handleLogout={handleLogout}   />
         <HeaderMobile listCart={listCart} productArray={productArray} user={user} handleLogout={handleLogout}  />
         <Routes>
            <Route path='/' element={<PageHome listDataMenu={listDataMenu} listImageSlider={listImageSlider} listProduct={listProduct} hadleAddProduct={hadleAddProduct} />} />
            <Route path='/detail/:id' element={<PageDetail productArray={productArray} hadleAddProduct={hadleAddProduct} sliceArray={sliceArray} />} />
            <Route path='/cart' element={<PageCart listCart={listCart} handleIncrementProduct={handleIncrementProduct} handleDecrementProduct={handleDecrementProduct} handleDelete={handleDelete} />} />
            <Route path='/category' element={<PageCategory productArray={productArray} listImageSliderCategory={listImageSliderCategory} listButtonCaregory={listButtonCaregory} hadleAddProduct={hadleAddProduct} />} />
            <Route path='/search/:value' element={<PageSearch productArray={productArray} />} />
            <Route path='/registration' element={<PageRegistration />} />
            <Route path='/login' element={<PageLogin handleGetUser={handleGetUser} />} />
            <Route path='/promotion' element={<PagePromotion listPromotion={listPromotion} />} />
            <Route path='/news' element={<PageNews />} />
            <Route path='/informationUser' element={<PageInformationUser user={user} />} />
            <Route path='/updateUser' element={<PageUpdateUser user={user} />} />
            <Route path='/accountManagement' element={<PageAccountManagement />} />
            <Route path='*' element={<NotFount />} />
         </Routes>
         <Footer listPolicy={listPolicy} listShowRoom={listShowRoom} />
         <BackToTop />
    </div>
    </BrowserRouter>
  );
}

export default App;
