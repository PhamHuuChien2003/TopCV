import React from "react"

import "../../Css/HFBase.css"
import "../../Css/Responsive/HFResponsive.css"
import "../../Css/Base.css"
import "./VacancyPage.css"
import "../../Css/grid.css"
import "../../Css/Responsive/TinTuyenDungRepon.css"
import "../../Css/fontawesome-free-6.0.0-web/css/all.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom"

export default function Vacancy2Page () {

    const navigate = useNavigate();

  return (
    <React.Fragment>
        <div id="toast">
    </div>
    <div className="app">
        <div className="header">
            <a className="header__logo" onClick={() => navigate("/")}>
                <img src="asset/Img/logo.webp" alt="Logo" className="header__logo-img"/>
            </a>

            <ul className="header__list hide-on-mobile">
                <li className="header__item header__item-sub1">
                    <a onClick={() => navigate("/jobpage")} className="header__item-link">Việc Làm</a>
                    <div className="header__list-sub1">
                        <ul className="list__sub">
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-magnifying-glass"></i> Tìm việc làm
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-briefcase"></i> Việc làm đã ứng tuyển
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-heart"></i> Việc làm đã lưu
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-robot"></i> Việc làm phù hợp
                                </a>
                                <span className="list__sub-item-hot">Hot</span>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-cloud"></i> Việc làm từ xa (Remote)
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-laptop"></i> Việc làm IT
                                </a>
                                <span className="list__sub-item-new">Mới</span>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-user-graduate"></i> Việc làm Senior
                                </a>
                                <span className="list__sub-item-new">Mới</span>
                            </li>
                        </ul>
                        <div className="list__img-job">
                            <img src="asset/Img/nav-job.webp" alt="" className="list__img-link"/>
                        </div>
                    </div>
                </li>
                <li className="header__item header__item-sub2">
                    <a href="#" className="header__item-link">Hồ sơ & CV</a>
                    <div className="header__list-sub2">
                        <ul className="list__sub ">
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-id-badge"></i> Quản lý CV
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-file-lines"></i> Quản lý Cover Letter
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-id-badge"></i> Mẫu CV
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-file-lines"></i> Mẫu Cover Letter
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-id-badge"></i> Dịch vụ tư vấn CV
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-id-badge"></i> Hướng dẫn viết CV theo nghành nghề
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-id-card"></i> TopCV profile
                                </a>
                            </li>
                        </ul>
                        <div className="list__img-cv">
                            <img src="asset/Img/nav-cv.webp" alt="" className="list__img-link"/>
                        </div>
                    </div>
                </li>
                <li className="header__item header__item-sub3">
                    <a onClick={() => navigate("/stockpage")} className="header__item-link">Công Ty</a>
                    <div className="header__list-sub3">
                        <ul className="list__sub">
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-building"></i> Danh sách công ty
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-city"></i> Top công ty
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__item header__item-sub4">
                    <a href="#" className="header__item-link">Phát triển sự nghiệp</a>
                    <div className="header__list-sub4">
                        <ul className="list__sub">
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-medal"></i> TopCV Contest
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-book"></i> TopCV Skills
                                </a>
                                <span className="list__sub-item-new">Mới</span>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-circle-question"></i> Trắc nghiệm tính cách MBTI
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-circle-question"></i> Trắc nghiệm MI
                                </a>
                            </li>
                        </ul>
                        <div className="list__img-contest">
                            <img src="asset/Img/nav-contest.webp" alt="" className="list__img-link"/>
                        </div>
                    </div>
                </li>
                <li className="header__item  header__item-sub5">
                    <a href="#" className="header__item-link">Công cụ</a>
                    <div className="header__list-sub5">
                        <ul className="list__sub">
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-calculator"></i> Tính lương GROSS - NET
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-calculator"></i> Tính lãi xuất kép
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-calculator"></i> kế hoạch tiết kiệm
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-calculator"></i> Bảo hiểm thất nghiệp
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-calculator"></i> Tính bảo hiểm xã hội một lần
                                </a>
                            </li>
                            <li className="list__sub-item">
                                <a href="#" className="list__sub-item-link">
                                    <i className="list__sub-item-icon fa-solid fa-mobile"></i> Mobile App TopCV
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            <ul className="header__profile">
                <li className="header__profile-connect ">
                    <a href="KetNoi.html" className="header__profile-connect-link">
                        <i className="header__profile-connect-link-icon fa-solid fa-comments"></i>
                    </a>
                </li>

                <li className="header__profile-notification ">
                    <a href="#" className="header__profile-notification-link">
                        <i className="header__profile-notification-link-icon fa-solid fa-bell"></i>
                    </a>
                    <div className="header__profile-notification-sub">
                        <h3 className="header__profile-notify-header">Thông báo mới nhận</h3>
                        <ul className="header__profile-notify-list">
                            <li className="header__profile-notify-item">
                                <a href="" className="header__profile-notify-item">Thông báo tuyển dụng:  .......</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__profile-account hide-on-mobile">
                    <div className="header__profile-account-title">
                        <div className="header__profile-account-title-img">
                            <img src="asset/Img/IMG_3440.JPG" alt="" className="header__profile-account-title-img-link"/>
                        </div>
                        <span className="header__profile-account-title-name">Phạm Hữu Chiến
                            <i className="header__profile-account-title-icon fa-solid fa-angle-down"></i>
                        </span>
                    </div>

                    <div className="header__profile-account-menunav">
                        <ul className="header__menunav__list">
                            <div className="header__menunav__list-infor">
                                <img src="asset/Img/IMG_3440.JPG" alt="" className="header__menunav__list-infor-img"/>
                                <div className="header__menunav__list-infor-name">
                                    <p className="header__menunav__list-infor-name-textname">Phạm Hữu Chiến</p>
                                    <p className="header__menunav__list-infor-name-textma">Mã Ứng Viên: 12520036</p>
                                </div>
                            </div>
                            <li className="header__menunav__list-item">
                                <a className="header__menunav__list-item-link">
                                    <i className="header__menunav__list-item-icon fa-solid fa-circle-up"></i> Nâng cấp tài khoản VIP
                                </a>
                            </li>
                            <li className="header__menunav__list-item">
                                <a className="header__menunav__list-item-link">
                                    <i className="header__menunav__list-item-icon fa-solid fa-gift"></i> Kích hoạt quà tặng
                                </a>
                            </li>
                            <li className="header__menunav__list-item">
                                <a className="header__menunav__list-item-link">
                                    <i className="header__menunav__list-item-icon fa-regular fa-eye"></i> Nhà tuyển dụng xem hồ sơ
                                </a>
                            </li>
                            <li className="header__menunav__list-item">
                                <a className="header__menunav__list-item-link">
                                    <i className="header__menunav__list-item-icon fa-solid fa-list-check"></i> Cài đặt gợi ý việc làm
                                </a>
                            </li>
                            <li className="header__menunav__list-item">
                                <a className="header__menunav__list-item-link">
                                    <i className="header__menunav__list-item-icon fa-regular fa-envelope"></i>Cài đặt nhận email
                                </a>
                            </li>
                            <li className="header__menunav__list-item">
                                <a className="header__menunav__list-item-link">
                                    <i className="header__menunav__list-item-icon fa-solid fa-circle-question"></i> Cài đặt bảo mật
                                </a>
                            </li>
                            <li className="header__menunav__list-item">
                                <a className="header__menunav__list-item-link">
                                    <i className="header__menunav__list-item-icon fa-solid fa-circle-question"></i> Đổi mật khẩu
                                </a>
                            </li>
                            <li className="header__menunav__list-item header__menunav__list-item-exit">
                                <a className="header__menunav__list-item-link">
                                    <i className="header__menunav__list-item-icon fa-solid fa-circle-xmark"></i> Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            
            <label for="nav-mobile-input" className="header-mobile__icon">
                <i className="header-mobile__icon-link fa-solid fa-list"></i>
            </label>
            <input type="checkbox" name="" id="nav-mobile-input" autocomplete="off"/>
            <label for="nav-mobile-input" className="over__lay"></label>
            <div className="header-mobile__menu">
                <label for="nav-mobile-input" className="header-mobile__control">
                        <i className="header-mobile__control-icon fa-solid
                            fa-xmark"></i>
                    </label>
                <ul className="header-mobile__list">
                    <li className="header-mobile__item">
                        <a href="#" className="header-mobile__item-link">Việc Làm</a>
                        <div className="header-mobile__item-listsub">
                            <ul className="header-mobie__list-sub">
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-magnifying-glass"></i> Tìm việc làm
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-briefcase"></i> Việc làm đã ứng tuyển
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-heart"></i> Việc làm đã lưu
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-robot"></i> Việc làm phù hợp
                                    </a>
                                    <span className="list__sub-item-hot">Hot</span>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-cloud"></i> Việc làm từ xa (Remote)
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-laptop"></i> Việc làm IT
                                    </a>
                                    <span className="list__sub-item-new">Mới</span>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-user-graduate"></i> Việc làm Senior
                                    </a>
                                    <span className="list__sub-item-new">Mới</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="header-mobile__item">
                        <a href="#" className="header-mobile__item-link">Hồ Sơ &
                                CV</a>
                        <div className="header-mobile__item-listsub">
                            <ul className="header-mobie__list-sub ">
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-id-badge"></i> Quản lý CV
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-file-lines"></i> Quản lý Cover Letter
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-id-badge"></i> Mẫu CV
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-file-lines"></i> Mẫu Cover Letter
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-id-badge"></i> Dịch vụ tư vấn CV
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-id-badge"></i> Hướng dẫn viết CV theo nghành nghề
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-id-card"></i> TopCV profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="header-mobile__item">
                        <a href="#" className="header-mobile__item-link">Công Ty</a>
                        <div className="header-mobile__item-listsub">
                            <ul className="header-mobie__list-sub">
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-building"></i> Danh sách công ty
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-city"></i> Top công ty
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="header-mobile__item">
                        <a href="#" className="header-mobile__item-link">Phát
                                triển sự nghiệp</a>
                        <div className="header-mobile__item-listsub">
                            <ul className="header-mobie__list-sub">
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-medal"></i> TopCV Contest
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-book"></i> TopCV Skills
                                    </a>
                                    <span className="list__sub-item-new">Mới</span>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-circle-question"></i> Trắc nghiệm tính cách MBTI
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-circle-question"></i> Trắc nghiệm MI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="header-mobile__item">
                        <a href="#" className="header-mobile__item-link">Công cụ</a>
                        <div className="header-mobile__item-listsub">
                            <ul className="header-mobie__list-sub">
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-calculator"></i> Tính lương GROSS - NET
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-calculator"></i> Tính lãi xuất kép
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-calculator"></i> kế hoạch tiết kiệm
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-calculator"></i> Bảo hiểm thất nghiệp
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-calculator"></i> Tính bảo hiểm xã hội một lần
                                    </a>
                                </li>
                                <li className="header-mobile__list-sub-item">
                                    <a href="#" className="header-mobile__list-sub-item-link">
                                        <i className="header-mobile__list-sub-item-icon fa-solid fa-mobile"></i> Mobile App TopCV
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
           
        </div>

        <div className="container">
            <div className="grid wide">
                <div className="row container__top">
                  
                    <div className="container__search">
                        <div className="select-box hide-on-mobile">
                            <div className="options-container">
                                <div className="option">
                                    <input type="radio" className="radio" id="Tất cả nghành nghề" name="category" />
                                    <label for="Tất cả nghành nghề">Tất cả nghành nghề</label>
                                </div>

                                <div className="option">
                                    <input type="radio" className="radio" id="Kinh doanh / Bán hàng" name="category" />
                                    <label for="Kinh doanh / Bán hàng">Kinh doanh / Bán hàng</label>
                                </div>

                                <div className="option">
                                    <input type="radio" className="radio" id="Biên / Phiên dịch" name="category" />
                                    <label for="Biên / Phiên dịch">Biên / Phiên dịch</label>
                                </div>

                                <div className="option">
                                    <input type="radio" className="radio" id="Báo chí / Truyền hình" name="category" />
                                    <label for="Báo chí / Truyền hình">Báo chí / Truyền hình</label>
                                </div>

                                <div className="option">
                                    <input type="radio" className="radio" id="Bưu chính - Viễn thông" name="category" />
                                    <label for="Bưu chính - Viễn thông">Bưu chính - Viễn thông</label>
                                </div>

                                <div className="option">
                                    <input type="radio" className="radio" id="Bất động sản" name="category" />
                                    <label for="Bất động sản">Bất động sản</label>
                                </div>

                                <div className="option">
                                    <input type="radio" className="radio" id="Bảo hiểm" name="category" />
                                    <label for="Bảo hiểm">Bảo hiểm</label>
                                </div>

                                <div className="option">
                                    <input type="radio" className="radio" id="Công nghệ cao" name="category" />
                                    <label for="Công nghệ cao">Công nghệ cao</label>
                                </div>

                                <div className="option">
                                    <input type="radio" className="radio" id="Cơ khí / Chế tạo / Tự động hóa" name="category" />
                                    <label for="Cơ khí / Chế tạo / Tự động hóa">Cơ khí / Chế tạo / Tự động hóa</label>
                                </div>
                            </div>

                            <div className="selected">
                                <i className="header__profile-connect-link-icon-search fa-solid fa-building"></i> Tất cả nghành nghề
                                <i className="selected-icon fa-solid fa-angle-down"></i>
                            </div>

                            <div className="search-box">
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="container__search-2 hide-on-mobile">
                        <div className="select-box-2">
                            <div className="options-container-2">
                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="Tất cả lĩnh vực công ty" name="category" />
                                    <label for="Tất cả lĩnh vực công ty">Tất cả lĩnh vực công ty</label>
                                </div>

                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="IT - Phần mềm" name="category" />
                                    <label for="IT - Phần mềm">IT - Phần mềm</label>
                                </div>

                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="Kế toán / Kiểm toán" name="category" />
                                    <label for="Kế toán / Kiểm toán">Kế toán / Kiểm toán</label>
                                </div>

                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="Luật" name="category" />
                                    <label for="Luật">Luật</label>
                                </div>

                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="Bảo hiểm" name="category" />
                                    <label for="Bảo hiểm">Bảo hiểm</label>
                                </div>

                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="Bất động sản" name="category" />
                                    <label for="Bất động sản">Bất động sản</label>
                                </div>

                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="Dược phẩm / Y tế / Công nghệ sinh học" name="category" />
                                    <label for="Dược phẩm / Y tế / Công nghệ sinh học">Dược phẩm / Y tế / Công nghệ sinh học</label>
                                </div>

                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="Internet / Online" name="category" />
                                    <label for="Internet / Online">Internet / Online</label>
                                </div>

                                <div className="option-2">
                                    <input type="radio" className="radio-2" id="Marketing / Truyền thông / Quảng cáo" name="category" />
                                    <label for="Marketing / Truyền thông / Quảng cáo">Marketing / Truyền thông / Quảng cáo</label>
                                </div>
                            </div>

                            <div className="selected-2">
                                <i className="header__profile-connect-link-icon-search fa-solid fa-building"></i> Tất cả công ty
                                <i className="selected-icon fa-solid fa-angle-down"></i>
                            </div>

                            <div className="search-box-2">
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="container__search-3 hide-on-mobile">
                        <div className="select-box-3">
                            <div className="options-container-3">
                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Tất cả địa điểm" name="category" />
                                    <label for="Tất cả địa điểm">Tất cả địa điểm</label>
                                </div>

                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Hà Nội" name="category" />
                                    <label for="Hà Nội">Hà Nội</label>
                                </div>

                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Hồ Chí Minh" name="category" />
                                    <label for="Hồ Chí Minh">Hồ Chí Minh</label>
                                </div>

                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Đà Nẵng" name="category" />
                                    <label for="Đà Nẵng">Đà Nẵng</label>
                                </div>

                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Hưng Yên" name="category" />
                                    <label for="Hưng Yên">Hưng Yên</label>
                                </div>

                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Bắc Giang" name="category" />
                                    <label for="Bắc Giang">Bắc Giang</label>
                                </div>

                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Bắc Ninh" name="category" />
                                    <label for="Bắc Ninh">Bắc Ninh</label>
                                </div>

                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Cao Bằng" name="category" />
                                    <label for="Cao Bằng">Cao Bằng</label>
                                </div>

                                <div className="option-3">
                                    <input type="radio" className="radio-3" id="Bình Dương" name="category" />
                                    <label for="Bình Dương">Bình Dương</label>
                                </div>
                            </div>

                            <div className="selected-3">
                                <i className="header__profile-connect-link-icon-search fa-solid fa-location-dot"></i> Tất cả địa điểm
                                <i className="selected-icon fa-solid fa-angle-down"></i>
                            </div>

                            <div className="search-box-3">
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    
                    <div className="header__search fl-r">
                        <div className="header__search-primary">
                            <input autocomplete="off" onblur="hideShow()" onkeyup="search()" id="key-search" type="text" className="header__search-input" placeholder="Nhập vị trí bạn muốn ứng tuyển..."/>
                            <button className="header__search-btn">
                                    <i className="header__search-icon fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                        <div id="header__search-sub">

                        </div>
                    </div>
                </div>
            </div>
            <div className="container__body">
                <div className="grid wide">
                    <div className="container__body-tilte">
                        <div className="container__body-tilte-detail">
                            <a href="#"> Trang chủ </a>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="#"> Việc làm </a>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="#"> Tìm việc làm nhân viên kinh doanh </a>
                            <i className="fa-solid fa-angle-right"></i>
                            <span> Tuyển Chuyên Viên Kinh Doanh Bất Động Sản (Lương Cơ Bản Từ 7 Triệu + Hoa Hồng Cao Nhất Thị Trường)</span>
                        </div>
                        <div className="container__body-tilte-box" id="container__body-tilte-box">
                            <a href="#" className="container__body-tilte-box-link">
                                <div className="container__body-tilte-box-img">
                                    <img src="asset/Img/Chi Tiết CV/data/QOpqwW3L8VE3cBaY42HKk4Nfevnm0LSi_1648524019____16f2578ac50f6c150827960767392666 (1).jpg" alt=""/>
                                </div>
                            </a>
                            <div className="container__body-tilte-box-inforJob">
                                <a className="container__body-tilte-box-inforJob-jobtitle">
                                    Chuyên Viên Kinh Doanh Bất Động Sản (Lương Cơ Bản Từ 7 Triệu + Hoa Hồng Cao Nhất Thị Trường)
                                </a>
                                <a href="#" className="container__body-tilte-box-inforJob-companytilte">
                                    CÔNG TY CỔ PHẦN TẬP ĐOÀN SENGROUP
                                </a>
                                <div className="container__body-tilte-box-inforJob-deadline">
                                    <i className="fa-regular fa-clock"></i> Hạn nộp hồ sơ: 21/05/2022
                                </div>
                            </div>
                            <div className="container__body-tilte-box-apply">
                                <a onclick="ungtuyen(this)" className="container__body-tilte-box-apply-now">
                                    <i className="fa-regular fa-paper-plane"></i> Ứng tuyển ngay
                                </a>
                                <a onclick="huyungtuyen(this)" className="container__body-tilte-box-apply-now-done">
                                    <i className="fa-regular fa-paper-plane"></i> Hủy Ứng Tuyển
                                </a>
                                <a href="#" className="container__body-tilte-box-apply-save">
                                    <i className="fa-regular fa-heart"></i> Lưu tin
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container__body-company hide-on-mobile">
                        <ul className="container__body-company-list">
                            <li className="container__body-company-item">
                                <a href="#tuyendung">Tin Tuyển Dụng</a>
                            </li>
                            <li className="container__body-company-item">
                                <a href="#company">Thông Tin Công Ty</a>
                            </li>
                            <li className="container__body-company-item">
                                <a href="#job">Việc Làm Liên Quan</a>
                            </li>
                        </ul>
                    </div>
                    <div className="container__body-inforCV" id="tuyendung">
                        <h2 className="container__body-inforCV-title">Chi tiết tuyển dụng</h2>
                        <div className="row">
                            <div className="col l-8 m-12 c-12">
                                <div className="container__body-inforCV-infor ">
                                    <div className="row">
                                        <p className="container__body-inforCV-title-about">Thông tin chung</p>
                                    </div>
                                    <div className="row">
                                        <div className="container__body-inforCV-infor-sub col l-6 m-6 c-6">
                                            <div className="container__body-inforCV-infor-sub-item">
                                                <img src="asset/Img/Chi Tiết CV/listbox/1.svg" alt="" className="container__body-inforCV-infor-sub-img"/>
                                                <div className="container__body-inforCV-infor-sub-item-2">
                                                    <strong>Mức lương</strong><br/>
                                                    <span>6 - 20 triệu</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container__body-inforCV-infor-sub col l-6 m-6 c-6">
                                            <div className="container__body-inforCV-infor-sub-item">
                                                <img src="asset/Img/Chi Tiết CV/listbox/2.svg" alt="" className="container__body-inforCV-infor-sub-img"/>
                                                <div className="container__body-inforCV-infor-sub-item-2">
                                                    <strong>Hình Thức Làm Việc</strong><br/>
                                                    <span>Toàn Thời Gian</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container__body-inforCV-infor-sub col l-6 m-6 c-6">
                                            <div className="container__body-inforCV-infor-sub-item">
                                                <img src="asset/Img/Chi Tiết CV/listbox/3.svg" alt="" className="container__body-inforCV-infor-sub-img"/>
                                                <div className="container__body-inforCV-infor-sub-item-2">
                                                    <strong>Giới Tính</strong><br/>
                                                    <span>Không yêu cầu</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container__body-inforCV-infor-sub col l-6 m-6 c-6">
                                            <div className="container__body-inforCV-infor-sub-item">
                                                <img src="asset/Img/Chi Tiết CV/listbox/5.svg" alt="" className="container__body-inforCV-infor-sub-img"/>
                                                <div className="container__body-inforCV-infor-sub-item-2">
                                                    <strong>Số lượng tuyển </strong><br/>
                                                    <span>10 người</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container__body-inforCV-infor-sub col l-6 m-6 c-6">
                                            <div className="container__body-inforCV-infor-sub-item">
                                                <img src="asset/Img/Chi Tiết CV/listbox/6.svg" alt="" className="container__body-inforCV-infor-sub-img"/>
                                                <div className="container__body-inforCV-infor-sub-item-2">
                                                    <strong>Cấp bậc</strong><br/>
                                                    <span>Nhân viên</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container__body-inforCV-infor-sub col l-6 m-6 c-6">
                                            <div className="container__body-inforCV-infor-sub-item">
                                                <img src="asset/Img/Chi Tiết CV/listbox/7.svg" alt="" className="container__body-inforCV-infor-sub-img"/>
                                                <div className="container__body-inforCV-infor-sub-item-2">
                                                    <strong>Kinh nghiệm</strong><br/>
                                                    <span>1 năm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container__body-inforCV-address">
                                    <p><strong>Địa điểm làm việc </strong></p>
                                    <p>- Hồ Chí Minh: 11-11A Phạm Ngọc Thạch, Phường Võ Thị Sáu, Quận 3</p>
                                    <p>- Kiên Giang: Sonasea Paris Villas, Ấp Đường Bào, Huyện Dương Tơ, Phú Quốc</p>
                                </div>
                                <div className="container__body-inforCV-jobdata">
                                    <h3>Mô tả công việc </h3>
                                    <p>+ Thực hiện chỉ tiêu kinh doanh được giao</p>
                                    <p>+ Tham gia các buổi đào tạo hội nhập, kỹ năng bán hàng, thương thuyết, lập kế hoạch kinh doanh;</p>
                                    <p>+ Tìm kiếm khách hàng, mở rộng các kênh khai thác khách hàng tiềm năng;</p>
                                    <p>+ Tìm hiểu nhu cầu, tư vấn & chăm sóc các khách hàng có nhu cầu mua sản phẩm của Công ty;</p>
                                    <p>+ Cung cấp thông tin sản phẩm, khuyến mãi, và giá cả qua việc xác định các yêu cầu của khách hàng;</p>
                                    <p>+ Hướng dẫn, hỗ trợ khách hàng thực hiện các thủ tục ký kết hợp đồng mua bán với Công ty;</p>
                                    <p>+ Chăm sóc khách hàng hậu bán hàng với các chế độ thanh toán, hậu mãi, tri ân của công ty</p>
                                    <p>+ Thời gian làm việc: 44h/tuần (backoffice từ thứ 2 đến sáng thứ 7 hàng tuần, từ 8h00 - 12h00 nghỉ trưa 12h00- 13h30) Chiều 13h30 - 17h30 Khối kinh doanh do các quản lý bố trí đảm bảo đủ 44h/tuần</p>
                                    <h3>Yêu cầu ứng viên</h3>
                                    <p>+ Nam/Nữ, ngoại hình dễ nhìn (Cao tối thiểu 1m58). Độ tuổi từ 20 – 33 tuổi</p>
                                    <p>+ Có laptop, smartphone và phương tiện đi lại</p>
                                    <p>+ Có tinh thần mong muốn làm giàu, phát triển sự nghiệp)</p>
                                    <p>+ Yêu thích lĩnh vực kinh doanh Bất động sản</p>
                                    <p>+ Có kỹ năng làm việc độc lập, tự tin, hòa đồng, có tinh thần hỗ trợ đồng đội.</p>
                                    <p>+ Ưu tiên ứng viên có kinh nghiệm trong các ngành liên quan: bán hàng, kinh doanh bất động sản, bảo hiểm, ngân hàng… và các lĩnh vực có liên quan khác</p>
                                    <h3>Quyền lợi</h3>
                                    <p>+ Tham gia các dự án phát triển phần mềm Chính phủ điện tử lớn, có ý nghĩa cao.</p>
                                    <p>+ Cơ hội được đào tạo nội bộ và tham gia khóa học bên ngoài để nâng cao chuyên môn và kỹ năng làm việc</p>
                                    <p>+ Môi trường làm việc chuyên nghiệp, thân thiện.</p>
                                    <p>+ Đi làm 5 ngày/tuần, nghỉ Thứ bảy, Chủ nhật.</p>
                                    <p>+ Các chế độ phúc lợi và bảo hiểm theo Luật lao động</p>
                                    <p>+ Du lịch hàng năm và các chương trình teambuilding</p>
                                    <p>+ Thu nhập hấp dẫn dựa trên năng lực, thưởng tháng lương thứ 13 và thưởng hiệu quả năm theo kết quả kinh doanh.</p>
                                    <p>+ Chúng tôi luôn đề cao tinh thần thân thiện; gắn kết giữa nhân viên và công ty.</p>
                                    <h3>Cách thức ứng tuyển</h3>
                                    <div className="container__body-inforCV-jobdata-box">
                                        <p>Ứng viên nộp hồ sơ trực tuyến bằng cách bấm
                                            <a href="#" className="ast">Ứng tuyển ngay </a>dưới đây
                                        </p>
                                        <div className="container__body-inforCV-box-apply">
                                            <a href="#" className="container__body-inforCV-box-apply-now">
                                                <i className="fa-regular fa-paper-plane"></i> Ứng tuyển ngay
                                            </a>
                                            <a href="#" className="container__body-inforCV-box-apply-save">
                                                <i className="fa-regular fa-heart"></i> Lưu tin
                                            </a>
                                        </div>
                                        <p>Hạn nội hồ sơ : 08/05/2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-4 m-12 c-12">
                                <div className="container__body-inforCV-sharejob">
                                    <h3 className="container__body-inforCV-sharejob-tilte">
                                        Chia sẻ tin tuyển dụng
                                    </h3>
                                    <p className="container__body-inforCV-sharejob-sharelink">Sao chép đường dẫn</p>
                                    <div className="container__body-inforCV-sharejob-boxshare">
                                        <div className="container__body-inforCV-sharejob-boxshare-link">
                                            https://www.topcv.vn/viec-lam/lap-trinh-vien-javascript-reactjs-nodejs-vuejs/660030.html
                                        </div>
                                        <i className="fa-regular fa-copy container__body-inforCV-sharejob-boxshare-icon"></i>
                                    </div>
                                    <p className="container__body-inforCV-sharejob-sharelink">Chia sẻ qua mạng xã hội</p>
                                    <div className="container__body-inforCV-sharejob-boxlogo">
                                        <a href="#" className="container__body-inforCV-sharejob-boxlogo-link">
                                            <img src="asset/Img/Chi Tiết CV/Share/facebook.webp" alt="" className="container__body-inforCV-sharejob-boxlogo-link-img"/>
                                        </a>
                                        <a href="#" className="container__body-inforCV-sharejob-boxlogo-link">
                                            <img src="asset/Img/Chi Tiết CV/Share/linkedin.webp" alt="" className="container__body-inforCV-sharejob-boxlogo-link-img"/>
                                        </a>
                                        <a href="#" className="container__body-inforCV-sharejob-boxlogo-link">
                                            <img src="asset/Img/Chi Tiết CV/Share/twitter.webp" alt="" className="container__body-inforCV-sharejob-boxlogo-link-img"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="container__body-inforCV-reporjob">
                                    <h3 className="container__body-inforCV-reporjob-title">Báo cáo tin tuyển dụng</h3>
                                    <p className="container__body-inforCV-reporjob-text">Nếu bạn cảm thấy rằng tin tuyển dụng này không đúng, hãy phản ánh với chúng tôi</p>
                                    <a href="#" className="container__body-inforCV-reporjob-link">
                                        Báo cáo tin tuyển dụng không chính xác
                                    </a>
                                </div>
                                <div className="container__body-inforCV-keywordjob">
                                    <h3 className="container__body-inforCV-keywordjob-tilte">
                                        Nghành nghề
                                    </h3>
                                    <div className="container__body-inforCV-keywordjob-keyword" style = {{marginBottom:"20px;"}}>
                                        <span className="container__body-inforCV-keywordjob-item"><a href="#">Kinh doanh / Bán hàng</a> </span>
                                        <span className="container__body-inforCV-keywordjob-item"><a href="#">Bất động sản </a> </span>
                                        <span className="container__body-inforCV-keywordjob-item"><a href="#">Tư vấn</a></span>
                                    </div>
                                    <h3 className="container__body-inforCV-keywordjob-tilte">
                                        Khu Vực
                                    </h3>
                                    <div className="container__body-inforCV-keywordjob-keyword">
                                        <span className="container__body-inforCV-keywordjob-item"><a href="#">Tân Bình</a></span>
                                        <span className="container__body-inforCV-keywordjob-item"><a href="#">Hồ Chí Minh</a> </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container__body-inforCompany" id="company">
                        <div className="container__body-inforCompany-title">
                            <h2>
                                Thông tin CÔNG TY CỔ PHẦN TẬP ĐOÀN SENGROUP
                            </h2>
                            <a href="#" className="hide-on-mobile">Xem Trang Công Ty</a>
                        </div>
                        <div className="container__body-inforCompany-infor">
                            <div className="container__body-inforCompany-infor-boxitem">
                                <img src="asset/Img/Chi Tiết CV/Infor Company/8.svg" alt="" className="container__body-inforCompany-infor-boxitem-img hide-on-mobile"/>
                                <div className="container__body-inforCompany-infor-boxitem-div">
                                    <p className="container__body-inforCompany-infor-boxitem-title">Giới Thiệu :</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Công ty Cổ phần Tập Đoàn SENGROUP </p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Với bề dày kinh nghiệm trong lĩnh vực Bất Động Sản cùng sự đam mê, tận tâm và nhiệt huyết của tất cả cán bộ công nhân viên, SENGROUP đã cùng với các khách hàng, đối tác gặt hái rất nhiều thành công qua các dự án và
                                        sản phẩm mà SENGROUP triển khai, nhanh chóng trở thành đơn vị hợp tác đầu tư, phân phối bất động sản hàng đầu tại thị trường Phú Quốc.</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">SỨ MỆNH</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Mang đến cho khách hàng những sản phẩm, dịch vụ tốt nhất với sự hài lòng cao nhất.</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Thấu hiểu, hỗ trợ và giữ uy tín để đồng hành cùng đối tác.</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Tạo tối đa mọi điều kiện cho nhân viên phát triển đúng năng lực bản thân và hưởng xứng đáng những thành quả đạt được.</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Chung tay góp sức vì một xã hội giàu mạnh và đầy lòng nhân ái.</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">GIÁ TRỊ CỐT LÕI</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">ĐẠO ĐỨC - TRÍ TUỆ - UY TÍN</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Với 3 chữ làm kim chỉ nam: ĐẠO ĐỨC làm gốc, TRÍ TUỆ dẫn đường và UY TÍN để đi xa hơn, trong mọi hoạt động của công ty, chúng tôi luôn tâm niệm phải mang lại những giá trị Đích Thực cho Khách Hàng, Đối Tác và Nhân Viên.</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Các sản phẩm Công ty đang triển khai:</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">- Đại lý phân phối các sản phẩm của Sun Group, VinGroup tại Phú Quốc.</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">- Nổi bật như các sản phẩm: Hillside Residence, The Center, The Sky, Hon Thom Paradise Island</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">
                                        <br/>
                                    </p>
                                </div>
                            </div>
                            <div className="container__body-inforCompany-infor-boxitem">
                                <img src="asset/Img/Chi Tiết CV/Infor Company/9.svg" alt="" className="container__body-inforCompany-infor-boxitem-img hide-on-mobile"/>
                                <div className="container__body-inforCompany-infor-boxitem-div">
                                    <p className="container__body-inforCompany-infor-boxitem-title">Quy Mô :</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">100-499 nhân viên</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">
                                        <br/>
                                    </p>
                                </div>
                            </div>
                            <div className="container__body-inforCompany-infor-boxitem">
                                <img src="asset/Img/Chi Tiết CV/Infor Company/9.svg" alt="" className="container__body-inforCompany-infor-boxitem-img hide-on-mobile"/>
                                <div className="container__body-inforCompany-infor-boxitem-div">
                                    <p className="container__body-inforCompany-infor-boxitem-title">Địa điểm :</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">Số 11-11A Đường Phạm Ngọc Thạch, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</p>
                                    <p className="container__body-inforCompany-infor-boxitem-text">
                                        <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container__body-inforCompany-job-company">
                            <div className="container__body-inforCompany-job-company-boxtitle">
                                <h2 className="container__body-inforCompany-job-company-boxtitle-name">
                                    <i className="fa-solid fa-briefcase" id="iclss"></i> Việc Làm Cùng Công Ty
                                </h2>
                                <a href="#" className="container__body-inforCompany-job-company-boxtitle-link">
                                    Xem Nhiều Hơn
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                            <div className="container__body-inforCompany-job-company-boxjob">
                                <div className="row">
                                    <div className="col l-4 m-12 c-12">
                                        <div className="container__body-inforCompany-job-company-boxjob-item">
                                            <div className="box-item">
                                                <div className="box-item-top">
                                                    <div className="box-item-top-title">
                                                        <a href="#" className="box-item-top-title-link">Lập trình viên JaVa (Java Developer)</a>
                                                    </div>
                                                    <div className="box-item-top-icon">
                                                        <i className="fa-solid fa-heart box-item-top-icon-link"></i>
                                                    </div>
                                                </div>
                                                <div className="box-item-body">
                                                    <div className="box-item-body-deal " style={{marginRight: "10px"}}>Thỏa thuận</div>
                                                    <div className="box-item-body-address">Cầu Giấy, Hà Nội</div>
                                                </div>
                                                <div className="box-item-bottom">
                                                    <p className="box-item-bottom-update">
                                                        Còn <strong>16</strong> ngày để ứng tuyển
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col l-4 m-12 c-12">
                                        <div className="container__body-inforCompany-job-company-boxjob-item">
                                            <div className="box-item">
                                                <div className="box-item-top">
                                                    <div className="box-item-top-title">
                                                        <a href="#" className="box-item-top-title-link">System Administrator</a>
                                                    </div>
                                                    <div className="box-item-top-icon">
                                                        <i className="fa-solid fa-heart box-item-top-icon-link"></i>
                                                    </div>
                                                </div>
                                                <div className="box-item-body">
                                                    <div className="box-item-body-deal " style={{marginRight: "10px"}}>Trên 10 triệu</div>
                                                    <div className="box-item-body-address">Cầu Giấy, Hà Nội</div>
                                                </div>
                                                <div className="box-item-bottom">
                                                    <p className="box-item-bottom-update">
                                                        Còn <strong>16</strong> ngày để ứng tuyển
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container__body-job" id="job">
                        <h2 className="container__body-job-tilte">
                            Việc Làm Liên Quan
                        </h2>
                        <div className="container__body-job-box">
                            <div className="row">
                                <div className="col l-9 m-12 c-12 container__body-job-box-list">
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/cong-ty-co-phan-phat-trien-nguon-mo-va-dich-vu-fds-624e577a36259.jpg" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Lập trình viên Java (Java Developer)</h3>
                                                    <p>CÔNG TY CỔ PHẦN PHÁT TRIỂN NGUỒN MỞ VÀ DỊCH VỤ FDS</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 16</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>Thỏa thuận</p>
                                                    <p>Cầu giấy, Hà Nội</p>
                                                    <p>24 phút trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/2.jpg" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Senior Frontend Developer (Reactjs/Vuejs)</h3>
                                                    <p>CÔNG TY TNHH VAREAL VIỆT NAM</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 11</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>Thỏa thuận</p>
                                                    <p>Hà Nội</p>
                                                    <p>5 giờ trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/3.jpg" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Frontend Developer (C#, Javascrip, Vuejs, Reactjs ) - Upto 1700$ </h3>
                                                    <p>CÔNG TY CỔ PHẦN MISA - TRUNG TÂM PHÁT TRIỂN PHẦN MỀM</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 38</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>15-40 triệu</p>
                                                    <p>Hà Nội, Bắc Từ Liêm</p>
                                                    <p>10 giờ trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/4.jpg" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Lập trình viên PHP (Lương Upto 30Tr)</h3>
                                                    <p>CÔNG TY CỔ PHẦN CÔNG NGHỆ KỸ THUẬT VTECH</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong>26</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>Tới 30 triệu</p>
                                                    <p>Hà Nội, Nam Từ Liêm</p>
                                                    <p>10 giờ trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/5.png" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Lập trình viên PHP Develope - Lương upto 1500$</h3>
                                                    <p>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN KZTEK</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 37</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>Tới 1,500 USD</p>
                                                    <p>Từ Liêm, Hà Nội</p>
                                                    <p>10 giờ trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/6.webp" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Reactjs Developer</h3>
                                                    <p>CAREER TODAY</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 25</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>Thỏa thuận</p>
                                                    <p>Cầu giấy, Hà Nội</p>
                                                    <p>1 tuần trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/7.webp" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Frontend Developer (Lương 10 - 20 Triệu)</h3>
                                                    <p>CÔNG TY CỔ PHẦN LIFORTE VIỆT NAM</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 38</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>10-20 triệu</p>
                                                    <p>Thanh Xuân, Hà Nội</p>
                                                    <p>2 tuần trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/8.jpg" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>JavaScript Technical Leader </h3>
                                                    <p>CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ TTC VIỆT NAM</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 38</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>Tới 1,700 USD</p>
                                                    <p>Hà Nội, Cầu Giấy</p>
                                                    <p>1 tuần trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/9.jpg" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Fullstack Developer (Nodejs/ Vuejs/ Reactjs)</h3>
                                                    <p>CÔNG TY CP NGHIÊN CỨU VÀ PHÁT TRIỂN FABBI</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 9</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>Tới 35 triệu</p>
                                                    <p>Cầu giấy, Hà Nội</p>
                                                    <p>4 ngày trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/10.png" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Frontend Developer - Upto 1500$ </h3>
                                                    <p>CÔNG TY TNHH INFOPLUS
                                                    </p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 68</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>Tới 1,500 USD</p>
                                                    <p>Hà Nội</p>
                                                    <p>1 tuần trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/11.png" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Backend Developer</h3>
                                                    <p>CÔNG TY CỔ PHẦN ỨNG DỤNG PHẦN MỀM MOBIO VIỆT NAM</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 7</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>17-27 triệu</p>
                                                    <p>Cầu giấy, Hà Nội</p>
                                                    <p>2 ngày trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__body-job-box-item ">
                                        <div className="container__body-job-box-item-avt">
                                            <a href="#" className="container__body-job-box-item-avt-link">
                                                <img src="asset/Img/Chi Tiết CV/data/13.png" alt="" className="container__body-job-box-item-avt-link-img"/>
                                            </a>
                                        </div>
                                        <div className="container__body-job-box-item-body">
                                            <div className="container__body-job-box-item-body-content">
                                                <div className="container__body-job-box-item-body-content-left">
                                                    <h3>Fullstack JavaScript Developer</h3>
                                                    <p>WANOSOFT</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-content-right">
                                                    <p>Còn <strong> 8</strong> ngày để ứng tuyển</p>
                                                </div>
                                            </div>
                                            <div className="container__body-job-box-item-body-bottom">
                                                <div className="container__body-job-box-item-body-bottom-label">
                                                    <p>800-2000 USD</p>
                                                    <p>Hà Nội</p>
                                                    <p>2 tuần trước</p>
                                                </div>
                                                <div className="container__body-job-box-item-body-bottom-icon">
                                                    <i className="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-3 m-12 c-12">
                                    <div className="container__body-job-box-paner">
                                        <img src="asset/Img/Chi Tiết CV/data/panner2.webp" alt=""/>
                                    </div>
                                    <div className="container__body-job-box-paner">
                                        <img src="asset/Img/Chi Tiết CV/data/panner3.webp" alt=""/>
                                    </div>
                                    <div className="container__body-job-box-paner">
                                        <img src="asset/Img/Chi Tiết CV/data/panner4.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="grid wide">
                <div className="footer-white">
                    <div className="footer__company">
                        <h3 className="footer__company-tilte">
                            Các công ty tuyển dụng hàng đầu trên TopCV
                        </h3>
                        <div className="footer__company-listlogo">
                            <div className="row footer__company-listlogo-row">
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/1.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/2.jpg" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/3.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/4.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/5.jpg" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/6.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="row footer__company-listlogo-row">
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/7.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/8.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/9.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/10.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/11.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/12.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="row footer__company-listlogo-row">
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/13.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/14.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/15.jpg" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/16.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/17.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/trung-tam-dich-vu-18.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="row footer__company-listlogo-row">
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/19.jpg" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                                <div className="col l-2 m-4 c-4">
                                    <a href="" className="footer__company-listlogo-link">
                                        <img src="asset/Img/LogoCtyHopTac/20.webp" alt="" className="footer__company-listlogo-img"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 className="footer__company-hotline">Hotline tư vấn dành cho người tìm việc toàn quốc. Tìm việc khó đã có TopCV</h3>
                        <div className="footer__company-hotline-phone">
                            <a href="#">
                                <span>0969173092</span>
                            </a>
                        </div>
                        <div className="footer__text">
                            <p><strong>Cơ hội ứng tuyển việc làm với đãi ngộ hấp dẫn tại các công ty hàng đầu</strong></p>
                            <p>Trước sự phát triển vượt bậc của nền kinh tế, rất nhiều ngành nghề trở nên khan hiếm nhân lực hoặc thiếu nhân lực giỏi. Vì vậy, hầu hết các trường Đại học đều liên kết với các công ty, doanh nghiệp, cơ quan để tạo cơ hội cho
                                các bạn sinh viên được học tập, rèn luyện bản thân và làm quen với môi trường làm việc từ sớm. Trong danh sách việc làm trên đây, TopCV mang đến cho bạn những cơ hội việc làm tại những môi trường làm việc năng động, chuyên
                                nghiệp.
                            </p>
                            <p><strong>Vậy tại sao nên tìm việc làm tại TopCV?</strong></p>
                            <p><strong>Việc làm Chất lượng</strong></p>
                            <ul>
                                <li>Hàng ngàn tin tuyển dụng chất lượng cao được cập nhật thường xuyên để đáp ứng nhu cầu tìm việc của ứng viên.</li>
                                <li>Hệ thống thông minh tự động gợi ý các công việc phù hợp theo CV của bạn.</li>
                            </ul>
                            <p><strong>Công cụ viết CV đẹp Miễn phí</strong></p>
                            <ul>
                                <li>
                                    Nhiều mẫu CV đẹp, phù hợp nhu cầu ứng tuyển các vị trí khác nhau.
                                </li>
                                <li>Tương tác trực quan, dễ dàng chỉnh sửa thông tin, tạo CV online nhanh chóng trong vòng 5 phút.</li>
                            </ul>
                            <p><strong>Hỗ trợ người tìm việc</strong></p>
                            <ul>
                                <li>Nhà tuyển dụng chủ động tìm kiếm và liên hệ với bạn qua hệ thống kết nối ứng viên thông minh.</li>
                                <li>Báo cáo chi tiết Nhà tuyển dụng đã xem CV và gửi offer tới bạn.
                                </li>
                            </ul>
                            <p><strong>Bảo mật và an toàn tuyệt đối</strong></p>
                            <ul>
                                <li>
                                    Bạn có thể chủ động bật / tắt trạng thái tìm việc, trạng thái cho phép Nhà tuyển dụng xem hồ sơ. Nếu các trạng thái tắt, không ai có thể xem được CV của bạn.
                                </li>
                                <li>
                                    Các Nhà tuyển dụng đều được TopCV xác thực rõ ràng danh tính, đảm bảo đến từ các công ty uy tín, giúp bạn yên tâm hơn khi ứng tuyển và sớm chủ động nhận được phản hổi.
                                </li>
                            </ul>
                            <p>Tại TopCV, bạn có thể tìm thấy những tin tuyển dụng việc làm với mức lương vô cùng hấp dẫn. Những nhà tuyển dụng kết nối với TopCV đều là những công ty lớn tại Việt Nam, nơi bạn có thể làm việc trong một môi trường chuyên nghiệp,
                                năng động, trẻ trung. TopCV là nền tảng tuyển dụng công nghệ cao giúp các nhà tuyển dụng và ứng viên kết nối với nhau. Nhanh tay tạo CV để ứng tuyển vào các vị trí việc làm mới nhất hấp dẫn tại việc làm mới nhất tại Hà
                                Nội, việc làm mới nhất tại TP.HCM ở TopCV, bạn sẽ tìm thấy những việc làm mới nhất với mức lương tốt nhất!</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-gray">
                <div className="grid wide">
                    <div className="footer-gray-top">
                        <div className="row">
                            <div className="col l-3 m-3 c-12">
                                <div className="footer-gray-top-container">
                                    <span>Về TopCV <i className="fa-solid fa-angle-down" style={{display: "none"}}></i> </span>
                                    <ul className="footer-gray-top-container-list">
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Giới thiệu
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Góc báo chí
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Tuyển dụng</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">liên hệ</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Hỏi đáp</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Chính sách bảo mật</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Điều khoản dịch vụ</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Quy chế hoạt động</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-gray-top-container" style={{marginTop: "40px"}}>
                                    <span>Cộng đồng TopCv <i className="fa-solid fa-angle-down" style={{display: "none"}}></i> </span>
                                    <ul className="footer-gray-top-container-list">
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Facebook Fanpage
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Youtube Offical Channel
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Linkedin</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">TikTok Official Channel </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-3 m-3 c-12">
                                <div className="footer-gray-top-container">
                                    <span>Đối Tác </span>
                                    <ul className="footer-gray-top-container-list">
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                TestCenTer
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                TopHR
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">ViecNgay</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Happy Time</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Gitiho</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Học IELTS Dol.vn</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">JAMJA</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Mogi</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Homedy</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Printgo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-3 m-3 c-12">
                                <div className="footer-gray-top-container">
                                    <span>Hồ sơ và CV </span>
                                    <ul className="footer-gray-top-container-list">
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Quản lý CV của bạn
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                TopCV Profile
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Hướng dẫn viết CV</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Review CV</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-gray-top-container" style={{marginTop: "40px"}}>
                                    <span>Khám phá </span>
                                    <ul className="footer-gray-top-container-list">
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Ứng dụng di động TopCV
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Tính lương Gross - Net
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Tính lãi suất kép</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Lập kế hoạch tiết kiệm</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Tính bảo hiểm thất nghiệp</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Tính bảo hiểm xã hội một lần</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Trắc nghiệm MBTI</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Trắc nghiệm MI</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-3 m-3 c-12">
                                <div className="footer-gray-top-container">
                                    <span>Xây dựng sự nghiệp </span>
                                    <ul className="footer-gray-top-container-list">
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Việc làm tốt nhất
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                Việc làm lương cao
                                            </a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Việc làm quản lý</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Việc làm từ xa (remote)</a>
                                        </li>
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">Việc làm bán thời gian</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-gray-top-container" style={{marginTop: "40px"}}>
                                    <span>Phát triển bản thân </span>
                                    <ul className="footer-gray-top-container-list">
                                        <li className="footer-gray-top-container-list-item">
                                            <a href="#">
                                                TopCV contest
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="footer-gray-bottom">
                        <div className="row">
                            <div className="col l-8">
                                <div className="footer-gray-bottom-left">
                                    <p>@2014-2022 <strong>Công ty cổ phần TopCV Việt Nam</strong></p>
                                    <p><strong>Trụ sở HN:</strong></p>
                                    <p>Tầng 03, Tòa nhà Goldseason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội</p>
                                    <p><strong>Chi nhánh TP HCM</strong></p>
                                    <p>Tòa nhà cao ốc Nam Giao 1, số 261 - 263 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="footer-gray-bottom-right fl-l">
                                    <a href="#" className="footer-gray-bottom-right-link">
                                        <img src="asset/Img/bottom/1.webp" alt=""/>
                                    </a>
                                    <a href="#" className="footer-gray-bottom-right-link">
                                        <img src="asset/Img/bottom/2.webp" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </React.Fragment>
  )
}




