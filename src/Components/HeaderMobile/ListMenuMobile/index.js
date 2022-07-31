import React from "react";
import {Link} from 'react-router-dom'
import {ListMenuMobileWrapper} from './style'

const ListMenuMobile = ({user, handleLogout}) => {
    return (
        <ListMenuMobileWrapper className="list_menu-mobile">
            <label className="icon-close" for="check-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V96C464 87.16 456.8 80 448 80H64C55.16 80 48 87.16 48 96z" />
                    </svg>
            </label>
            <li>
                <Link to='/'>Trang chủ</Link>
            </li>
            <li>
                <Link to='/category'>Danh mục sản phẩm</Link>
            </li>
            <li>
                <Link to='/promotion'>Khuyến mại</Link>
            </li>
            <li>
                <Link to='/news'>Tin tức</Link>
            </li>
            {
                user.id ? <>
                   <li>
                      <Link to='/informationUser'>{user.name}</Link>
                   </li>
                  <li onClick={handleLogout}>
                      <Link to='/'>Đăng xuất</Link>
                  </li>
                </>
          :   <>
                 <li>
                     <Link to='/registration'>Đăng kí</Link>
                  </li>
                 <li>
                      <Link to='/login'>Đăng nhập</Link>
                 </li>
              </>
            }
            
            <li>
                <Link to='/category'>Laptop & Linh phụ kiện</Link>
            </li>
            <li>
                <Link to='/category'>Điện thoại, Tablet & Phụ kiện</Link>
            </li>
            <li>
                <Link to='/category'>Sản phẩm Apple</Link>
            </li>
            <li>
                <Link to='/category'>Máy tính đồng bộ</Link>
            </li>
            <li>
                <Link to='/category'>Server & Workstation</Link>
            </li>
            <li>
                <Link to='/category'>Gaming PC</Link>
            </li>
            <li>
                <Link to='/category'>Gaming Gear</Link>
            </li>
            <li>
                <Link to='/category'>Linh kiện máy tính</Link>
            </li>
            <li>
                <Link to='/category'>Phụ kiện máy tính & nghe nhìn</Link>
            </li>
            <li>
                <Link to='/category'>Màn hình máy tính</Link>
            </li>
            <li>
                <Link to='/category'>Thiết bị văn phòng & Phần mềm</Link>
            </li>
            <li>
                <Link to='/category'>Thiết bị lưu trữ & Kỹ thuật số</Link>
            </li>
            <li>
                <Link to='/category'>Thiết bị mạng</Link>
            </li>
            <li>
                <Link to='/category'>Camera & SmartHome</Link>
            </li>
            <li>
                <Link to='/category'>Thiết bị siêu thị & PM bán hàng</Link>
            </li>
            <li>
                <Link to='/category'>Thiết bị Hội nghị & Trường học</Link>
            </li>
        </ListMenuMobileWrapper>
    )
}

export default ListMenuMobile