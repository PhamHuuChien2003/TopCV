import React from "react"
import "./HomePage.css"
import "../../Css/HFBase.css"
import "../../Css/Base.css"
import "../../Css/grid.css"
import { useNavigate } from "react-router-dom"

export default function HomePage () {
    const navigate = useNavigate();

  return (
    <div className="app">
        <div className="header">
            <a className="header__logo" href="#">
                <img src="./images/logo.webp" alt="Logo" className="header__logo-img"/>
            </a>

            <ul className="header__list hide-on-mobile">
                <li className="header__item header__item-sub1">
                    <a href="ViecLam.html" className="header__item-link">Việc Làm</a>
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
                            <img src="./images/nav-job.webp" alt="" className="list__img-link"/>
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
                            <img src="./images/nav-cv.webp" alt="" className="list__img-link"/>
                        </div>
                    </div>
                </li>
                <li className="header__item header__item-sub3">
                    <a href="CongTy.html" className="header__item-link">Công Ty</a>
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
                            <img src="./images/nav-contest.webp" alt="" className="list__img-link"/>
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


            <ul className="header__btn">
                <li className="header__btn-login">
                    <button  className="header__btn-login-link" onClick={navigate("/Login")}>Đăng Nhập</button>
                </li>
                <li className="header__btn-sign-up">
                    <a href="#" className="header__btn-sign-up-link">Đăng Ký</a>
                </li>
            </ul>
            <label className="header-mobile__icon">
                <i className="header-mobile__icon-link fa-solid fa-list"></i>
            </label>
            <input type="checkbox" name="" id="nav-mobile-input" />
            <label className="over__lay"></label>
            <div className="header-mobile__menu">
                <label  className="header-mobile__control">
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
        <div className="body">
            <div className="search ">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-7 c-12 search__left">
                            <h1>Tìm Việc Phù Hợp Với Bạn</h1>
                            <div className="search__left-form ">
                                <div className="header__search">
                                    <div className="header__search-primary">
                                        <input className="header__search-input" placeholder="Nhập vị trí bạn muốn ứng tuyển..."/>
                                        <button className="header__search-btn">
                                                <i className="header__search-icon fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                    <div id="header__search-sub">

                                    </div>
                                </div>
                                <div className="header__advanced ">
                                    <div className="header__advanced-text">
                                        <h3 className="Search__advanced-tilte">Tìm kiếm nâng cao</h3>
                                        <h3 className="header__advanced-close">Ẩn <i className="fa-solid fa-angle-up"></i></h3>
                                    </div>
                                    <div className="header__advanced-div">
                                        <div className="container__search hide-on-mobile-tablet">
                                            <div className="select-box hide-on-mobile">
                                                <div className="options-container">
                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Tất cả nghành nghề" name="category" />
                                                        <label >Tất cả nghành nghề</label>
                                                    </div>

                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Kinh doanh / Bán hàng" name="category" />
                                                        <label >Kinh doanh / Bán hàng</label>
                                                    </div>

                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Biên / Phiên dịch" name="category" />
                                                        <label>Biên / Phiên dịch</label>
                                                    </div>

                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Báo chí / Truyền hình" name="category" />
                                                        <label >Báo chí / Truyền hình</label>
                                                    </div>

                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Bưu chính - Viễn thông" name="category" />
                                                        <label >Bưu chính - Viễn thông</label>
                                                    </div>

                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Bất động sản" name="category" />
                                                        <label>Bất động sản</label>
                                                    </div>

                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Bảo hiểm" name="category" />
                                                        <label>Bảo hiểm</label>
                                                    </div>

                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Công nghệ cao" name="category" />
                                                        <label>Công nghệ cao</label>
                                                    </div>

                                                    <div className="option">
                                                        <input type="radio" className="radio" id="Cơ khí / Chế tạo / Tự động hóa" name="category" />
                                                        <label > Cơ khí / Chế tạo / Tự động hóa</label>
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

                                        <div className="container__search-2 hide-on-mobile-tablet">
                                            <div className="select-box-2">
                                                <div className="options-container-2">
                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="Tất cả lĩnh vực công ty" name="category" />
                                                        <label >Tất cả lĩnh vực công ty</label>
                                                    </div>

                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="IT - Phần mềm" name="category" />
                                                        <label >IT - Phần mềm</label>
                                                    </div>

                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="Kế toán / Kiểm toán" name="category" />
                                                        <label >Kế toán / Kiểm toán</label>
                                                    </div>

                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="Luật" name="category" />
                                                        <label >Luật</label>
                                                    </div>

                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="Bảo hiểm" name="category" />
                                                        <label >Bảo hiểm</label>
                                                    </div>

                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="Bất động sản" name="category" />
                                                        <label >Bất động sản</label>
                                                    </div>

                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="Dược phẩm / Y tế / Công nghệ sinh học" name="category" />
                                                        <label >Dược phẩm / Y tế / Công nghệ sinh học</label>
                                                    </div>

                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="Internet / Online" name="category" />
                                                        <label >Internet / Online</label>
                                                    </div>

                                                    <div className="option-2">
                                                        <input type="radio" className="radio-2" id="Marketing / Truyền thông / Quảng cáo" name="category" />
                                                        <label >Marketing / Truyền thông / Quảng cáo</label>
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

                                        <div className="container__search-3 hide-on-mobile-tablet">
                                            <div className="select-box-3">
                                                <div className="options-container-3">
                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Tất cả địa điểm" name="category" />
                                                        <label >Tất cả địa điểm</label>
                                                    </div>

                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Hà Nội" name="category" />
                                                        <label >Hà Nội</label>
                                                    </div>

                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Hồ Chí Minh" name="category" />
                                                        <label >Hồ Chí Minh</label>
                                                    </div>

                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Đà Nẵng" name="category" />
                                                        <label>Đà Nẵng</label>
                                                    </div>

                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Hưng Yên" name="category" />
                                                        <label >Hưng Yên</label>
                                                    </div>

                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Bắc Giang" name="category" />
                                                        <label >Bắc Giang</label>
                                                    </div>

                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Bắc Ninh" name="category" />
                                                        <label >Bắc Ninh</label>
                                                    </div>

                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Cao Bằng" name="category" />
                                                        <label >Cao Bằng</label>
                                                    </div>

                                                    <div className="option-3">
                                                        <input type="radio" className="radio-3" id="Bình Dương" name="category" />
                                                        <label>Bình Dương</label>
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
                                    </div>
                                </div>
                            </div>
                            <h4 className="header__advanced-companyTop">Các công ty tuyển dụng hàng đầu trên top CV</h4>
                            <div className="header__advanced-companyLogo">
                                <div className="header__advanced-companyLogo-item">
                                    <img className="header__advanced-companyLogo-item-img" src="./images/TrangChu/Search/logo1.webp" alt=""/>
                                </div>
                                <div className="header__advanced-companyLogo-item">
                                    <img className="header__advanced-companyLogo-item-img" src="./images/TrangChu/Search/logo2.webp" alt=""/>
                                </div>
                                <div className="header__advanced-companyLogo-item">
                                    <img className="header__advanced-companyLogo-item-img" src="./images/TrangChu/Search/logo3.webp" alt=""/>
                                </div>
                                <div className="header__advanced-companyLogo-item">
                                    <img className="header__advanced-companyLogo-item-img" src="./images/TrangChu/Search/logo4.webp" alt=""/>
                                </div>
                                <div className="header__advanced-companyLogo-item">
                                    <img className="header__advanced-companyLogo-item-img" src="./images/TrangChu/Search/logo5.webp" alt=""/>
                                </div>
                                <div className="header__advanced-companyLogo-item">
                                    <img className="header__advanced-companyLogo-item-img" src="./images/TrangChu/Search/logo6.webp" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col l-5 c-12 search__right  hide-on-mobile-tablet">
                            <img src="./images/TrangChu/Search/image_topcv.webp" alt="" className="search__right-img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="creatCV">
                <div className="grid wide">
                    <div className="row creatCV__container">
                        <div className="col l-6 m-12 c-12">
                            <div className="creatCV__container-left">
                                <div className="creatCV__container-left-div">
                                    <h2 className="creatCV__container-left-tilte">
                                        Tạo CV online ấn tượng
                                    </h2>
                                    <h3 className="creatCV__container-left-text">
                                        TopCV hiện có 50+ mẫu CV chuyên nghiệp, độc đáo
                                        <p>phù hợp với mọi ngành nghề</p>
                                    </h3>
                                    <a href="#" className="creatCV__container-left-link">
                                        <span>+</span>Tạo CV Ngay
                                    </a>
                                </div>
                                <div className="creatCV__container-left-img">
                                    <img src="./images/TrangChu/creatCV/left.webp" alt="" className="creatCV__container-left-img-link"/>
                                </div>
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <div className="creatCV__container-left">
                                <div className="creatCV__container-left-div">
                                    <h2 className="creatCV__container-left-tilte">
                                        Sử dụng CV có sẵn để tìm việc <span className="creatCV__container-new">Mới</span>
                                    </h2>
                                    <h3 className="creatCV__container-left-text">
                                        Cách đơn giản để bắt đầu tìm việc tại TopCV, Nhà
                                        <p>tuyển dụng sẽ nhìn thấy CV bạn tải lên </p>
                                    </h3>
                                    <a href="#" className="creatCV__container-left-link">
                                        <span><i className="fa-solid fa-file-arrow-up"></i></span> Upload CV ngay
                                    </a>
                                </div>
                                <div className="creatCV__container-left-img">
                                    <img src="./images/TrangChu/creatCV/right.webp" alt="" className="creatCV__container-left-img-link"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="grid wide">
                    <div className="container__body-content1">
                        <div className="container__body-content1-top">
                            <h2 className="container__content1-tilte">
                                <i className="fa-solid fa-star"></i> Tin tuyển dụng, việc làm tốt nhất
                            </h2>
                            <a href="#" className="container__content-link-all">Xem tất cả</a>
                        </div>
                        <div className="container__body-content1-center">
                            <div className="row">
                                <div className="BtnLeftJob">
                                    <button >
                                        <i className="btn-l fa-solid fa-chevron-left"></i>
                                    </button>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/test.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="TinTuyenDung.html" className="container__body-data-item-infor-position">Nhân viên kinh doanh (Lương từ 15 triệu + doanh thu)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TNHH Bất Động Sản Sài Gòn Hưng Phát </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân viên kinh doanh (Lương từ 15 triệu + doanh thu)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Trên 15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Tân Bình, Hồ Chí Minh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/QOpqwW3L8VE3cBaY42HKk4Nfevnm0LSi_1648524019____16f2578ac50f6c150827960767392666.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="TinTuyenDung2.html" className="container__body-data-item-infor-position">Chuyên Viên Kinh Doanh Bất Động Sản (Lương Cơ Bản Từ 7 Triệu + Hoa Hồng Cao Nhất Thị Trường)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY CỔ PHẦN TẬP ĐOÀN SENGROUP </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Chuyên Viên Kinh Doanh Bất Động Sản</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                6 - 20 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Quận 3, Phú Quốc, Hồ Chí Minh, Kiên Giang
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/1.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân viên vận đơn-Trên 25 tuổi (Làm việc online)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TNHH CÔNG NGHỆ VÀ DỊCH VỤ ATECH.VN </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân viên vận đơn-Trên 25 tuổi (Làm việc online)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                15-25 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Cầu Giấy, Hà Nội
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/2.png"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="TinTuyenDung.html" className="container__body-data-item-infor-position">Nhân viên kinh doanh FPT</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TNHH MVP Viễn Thông Quốc Tế FPT </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân viên kinh doanh FPT</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                8-30 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Hồ Chí Minh, Quận 7, Hà Nội, Cầu Giấy
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/3.png"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Giảng viên công nghệ thông tin</a>
                                                <a href="#" className="container__body-data-item-infor-addres">Phân hiệu trường đại học FPT tại thành phố Hồ Chí Minh </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Giảng viên công nghệ thông tin</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                15-25 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Cầu Giấy, Hà Nội
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/4.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">
                                                    Nhân Viên Kinh Doanh Bất Động Sản Dự Án Novaland (Hỗ Trợ Data, Lương, Thưởng, Hoa Hồng Không Giới Hạn)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY CP ĐẦU TƯ VÀ PHÁT TRIỂN BẤT ĐỘNG SẢN THE ONE CORP</a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>
                                                        Nhân Viên Kinh Doanh Bất Động Sản Dự Án Novaland (Hỗ Trợ Data, Lương, Thưởng, Hoa Hồng Không Giới Hạn)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Trên 10 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Hà Nội, Bắc Giang, Hưng Yên, Quảng Ninh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/6.png"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Trợ Lý E-Commerce Online (Làm Việc Tại Nhà)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY CỔ PHẦN VIỄN THÔNG TIN HỌC BƯU ĐIỆN </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Trợ Lý E-Commerce Online (Làm Việc Tại Nhà)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                9 - 15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Remote
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/7.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân Viên Tư Vấn - Không Yêu Cầu Kinh Nghiệm - Thu Nhập Lên Đến 25 Triệu/Tháng</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TNHH PHÁT TRƯỜNG THỊNH </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân Viên Tư Vấn - Không Yêu Cầu Kinh Nghiệm - Thu Nhập Lên Đến 25 Triệu/Tháng</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Trên 15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Quận 5, TP Hồ Chí Minh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/8.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân Viên Tư Vấn Đặt Lịch Hẹn Sự Kiện-Telemarketing-Hồ Chí Minh (Không Chốt Sale-Có Đào Tạo-Thu Nhập Cao)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">Công ty TNHH Khu Du Lịch Vịnh Thiên Đường (ALMA) </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân Viên Tư Vấn Đặt Lịch Hẹn Sự Kiện-Telemarketing-Hồ Chí Minh (Không Chốt Sale-Có Đào Tạo-Thu Nhập Cao)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                15-25 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Cầu Giấy, Hà Nội
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/9.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân Viên Kinh Doanh (Lương Từ 15 Triệu + Doanh Thu)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TNHH BÂT ĐỘNG SẢN SÀI GÒN HƯNG PHÁT </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân Viên Kinh Doanh (Lương Từ 15 Triệu + Doanh Thu)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Trên 15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Tân Bình, Hồ Chí Minh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/10.png"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Trưởng nhóm Content Marketing</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY Cổ Phần Và Công Nghệ Việt Mĩ</a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Trưởng nhóm Content Marketing</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                15-25 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Cầu Giấy, Hà Nội
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/11.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân Viên Kinh Doanh/ Tư Vấn Vật Liệu Nội Thất (HCM/ Đà Nẵng)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TRÁCH NHIỆM HỮU HẠN THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU A & B </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân Viên Kinh Doanh/ Tư Vấn Vật Liệu Nội Thất (HCM/ Đà Nẵng)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Trên 15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Hồ Chí Minh, Cẩm Lệ, Đà Nẵng, Bình Thạnh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/12.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân Viên Nhập Liệu (Lương Tới 6.000.000Đ/Tháng)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">Phuong Chi Software Company </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân Viên Nhập Liệu (Lương Tới 6.000.000Đ/Tháng)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Trên 6 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Hà Nội, Đống Đa, Thanh Xuân, Từ Liêm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/13.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Cộng Tác Viên Nhập Dữ Liệu - Trên 24 Tuổi (Làm Việc Online)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY CỔ PHẦN TRUYỀN THÔNG LONG THÀNH </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Cộng Tác Viên Nhập Dữ Liệu - Trên 24 Tuổi (Làm Việc Online)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                9 - 15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Remote
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/14.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân Viên Kinh Doanh (Có Lương Cứng)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY CỔ PHẦN TPI LAND </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân Viên Kinh Doanh (Có Lương Cứng)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                5-15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Hồ Chí Minh, Quận 2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/15.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân viên lễ tân</a>
                                                <a href="#" className="container__body-data-item-infor-addres">Công ty Cổ phần Quản lý và Khai thác Tài sản Dầu Khí (PSA) </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân viên lễ tân</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Thỏa thuận
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Cầu Giấy, Hà Nội , Ba Đình
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/16.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Digital Marketing ( Lương Từ 12 Triệu)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TNHH IGEA VIỆT NAM </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Digital Marketing ( Lương Từ 12 Triệu)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                12-20 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Quận 1, Hồ Chí Minh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/17.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Giám Sát Dự Án</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XÂY DỰNG ĐÔNG NAM Á</a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Giám Sát Dự Án</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Thỏa thuận
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Quận 10, Hồ Chí Minh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/18.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Leader SEO - SEO Marketing Leader (Lương 15 - 20 Triệu)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY CỔ PHẦN SẢN XUẤT VÀ THƯƠNG MẠI PANDA VIỆT </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Leader SEO - SEO Marketing Leader (Lương 15 - 20 Triệu)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                15-2 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Gò Vấp, Hồ Chí Minh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/19.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Kế Toán Tổng Hợp (Lương từ 12tr)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY TNHH THƯƠNG MẠI VẬN TẠI ANPHA </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Kế Toán Tổng Hợp (Lương từ 12tr)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                12-15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Hoàng Mai , Hà Nội
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/20.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân viên chăm sóc khách hàng (Lương cứng từ 10 triệu)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY CỔ PHẦN MISA </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân viên chăm sóc khách hàng (Lương cứng từ 10 triệu)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                15-25 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Cầu Giấy, Hà Nội
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/21.JPG"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Tư Vấn Chứng Khoán (Có Nhận Sinh Viên Mới Ra Trường Và Đào Tạo Mới)</a>
                                                <a href="#" className="container__body-data-item-infor-addres">Tài Chính - Chứng Khoán MGlobal </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Tư Vấn Chứng Khoán (Có Nhận Sinh Viên Mới Ra Trường Và Đào Tạo Mới)</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                Trên 15 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Hồ Chí Minh, Phú Nhuận
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/22.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Trợ Lý Văn Phòng ( Admin Văn Phòng) - Lương Đến 18 Triệu / Tháng Tại Hà Nội</a>
                                                <a href="#" className="container__body-data-item-infor-addres">CÔNG TY CỔ PHẦN THƯƠNG MẠI HỒNG PHÁT </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Trợ Lý Văn Phòng ( Admin Văn Phòng) - Lương Đến 18 Triệu / Tháng Tại Hà Nội</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                10-18 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Cầu Giấy, Hà Nội
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-6 c-12 ">
                                    <div className="container__body-data">
                                        <div className="container__body-data-item">
                                            <a className="container__body-data-item-img-link">
                                                <div className="container__body-data-item-img">
                                                    <img src="./images/data/23.jpg"></img>
                                                </div>
                                            </a>
                                            <div className="container__body-data-item-infor">
                                                <a href="#" className="container__body-data-item-infor-position">Nhân viên hỗ trợ ban bảo hiểm trực tuyến</a>
                                                <a href="#" className="container__body-data-item-infor-addres">BẢO HIỂM VIETTINBANK </a>
                                                <div className="container__body-data-item-infor-position-sub">
                                                    <span>Nhân viên hỗ trợ ban bảo hiểm trực tuyến</span>
                                                </div>
                                            </div>
                                            <div className="container__body-data-item-like">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <div className="container__body-data-bottom">
                                            <div className="container__body-data-bottom-deal">
                                                6-8 triệu
                                            </div>
                                            <div className="container__body-data-bottom-address">
                                                Hà Nội, Đống Đa
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="BtnRightJob">
                                    <button >
                                        <i className="btn-l fa-solid fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slideJob">
                <div className="grid wide">
                    <h2 className="slideJob-top">
                        Top nghành nghề nổi bật
                    </h2>
                    <div className="container__body-slide2">
                        <div className="BtnLeftslide2">
                            <button>
                                <i className="btn-l fa-solid fa-chevron-left"></i>
                            </button>
                        </div>
                        <div className="slider-wrapper">
                            <div className="container__body-slide2-main">
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    Marketing / Truyền thông / Quảng cáo
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    102.302 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    Ngân hàng / Tài chính
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    51.259 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    Nhân sự
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    45.789 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    Tư vấn
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    77.562 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    Kinh doanh/ Bán hàng
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    200.681 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    Bất động sản
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    37.801 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    Dịch vụ khách hàng
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    73.305 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    Hành chính văn phòng
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    90.195 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="container__body-slide2-item">
                                    <a href="#" className="container__body-slide2-item-link">
                                        <div className="container__body-slide2-item-box">
                                            <div className="container__body-slide2-item-box-icon">
                                                <i className="fa-solid fa-briefcase container__body-slide2-item-box-icon-link"></i>
                                            </div>
                                            <div className="container__body-slide2-item-box-text">
                                                <h3 className="container__body-slide2-item-box-text-name">
                                                    IT / Phần mềm
                                                </h3>
                                                <p className="container__body-slide2-item-box-text-count">
                                                    68.909 việc làm
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="BtnRightslide2">
                            <button>
                                <i className="btn-l fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="selfGrowth">
                <div className="grid wide">
                    <h2 className="selfGrowth-tilte">Phát triển bản thân và sự nghiệp</h2>
                    <div className="row selfGrowth-boxmain">
                        <div className="col l-6 m-12 c-12 ">
                            <div className="selfGrowth-box-item">
                                <img className="selfGrowth-box-item-img" src="./images/TrangChu/selfGrowth/ic1.svg" alt=""/>
                                <div className="selfGrowth-box-item-text">
                                    <h3>Khám phá tính cách và năng lực bản thân</h3>
                                    <p>Lựa chọn nghề nghiệp chính xác hơn thông qua các bài trắc nghiệm về tính cách, khả năng giải quyết vấn đề, trí thông minh,...</p>
                                    <div className="selfGrowth-box-item-link">
                                        <a href="#" className="selfGrowth-box-item-text-link-item">Trắc nghiệm MBTI</a>
                                        <a href="#" className="selfGrowth-box-item-text-link-item">Trắc nghiệm MI</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <div className="selfGrowth-box-item">
                                <img className="selfGrowth-box-item-img" src="./images/TrangChu/selfGrowth/ic2.svg" alt=""/>
                                <div className="selfGrowth-box-item-text">
                                    <h3>Tra cứu thông tin sự nghiệp</h3>
                                    <p>Dễ dàng tiếp cận và tìm hiểu về các chế độ, chính sách nhân sự cần biết thông qua các công cụ hữu ích</p>
                                    <div className="selfGrowth-box-item-link">
                                        <a href="#" className="selfGrowth-box-item-text-link-item">Công cụ tính lương Gross - net</a>
                                        <a href="#" className="selfGrowth-box-item-text-link-item">Công cụ tính BHTN</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row selfGrowth-boxmain">
                        <div className="col l-6 m-12 c-12">
                            <div className="selfGrowth-box-item">
                                <img className="selfGrowth-box-item-img" src="./images/TrangChu/selfGrowth/ic3.svg" alt=""/>
                                <div className="selfGrowth-box-item-text">
                                    <h3>Quỹ ý tưởng phát triển nghề nghiệp TopCarrer</h3>
                                    <p>Giúp học sinh, sinh viên hiểu về tầm quan trọng của giáo dục hướng nghiệp, nhận diện nghề và nâng cao năng lực ứng tuyển</p>
                                    <div className="selfGrowth-box-item-link">
                                        <a href="#" className="selfGrowth-box-item-text-link-item">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <div className="selfGrowth-box-item">
                                <img className="selfGrowth-box-item-img" src="./images/TrangChu/selfGrowth/ic4.svg" alt=""/>
                                <div className="selfGrowth-box-item-text">
                                    <h3>TopCV Contest - Cổng học tập và đánh giá năng lực</h3>
                                    <p>Cung cấp các khóa học, các kỳ thi giúp ứng viên hiểu rõ về xu hướng việc làm và những tiêu chuẩn mới về Năng lực chuyên môn</p>
                                    <div className="selfGrowth-box-item-link">
                                        <a href="#" className="selfGrowth-box-item-text-link-item">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row selfGrowth-boxmain">
                        <div className="col l-6 m-12 c-12">
                            <div className="selfGrowth-box-item">
                                <img className="selfGrowth-box-item-img" src="./images/TrangChu/selfGrowth/ic5.svg" alt=""/>
                                <div className="selfGrowth-box-item-text">
                                    <h3>Chương trình bệ phóng sự nghiệp 4.0 </h3>
                                    <p>Cung cấp cho sinh viên thông tin về thị trường tuyển dụng và đào tạo kỹ năng ứng tuyển, kết nối Nhà trường và Doanh nghiệp</p>
                                    <div className="selfGrowth-box-item-link">
                                        <a href="#" className="selfGrowth-box-item-text-link-item">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dowloadApp">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-6 m-12 c-12">
                            <div className="dowloadApp__left">
                                <h2 className="dowloadApp__left-tilte-top">Cơ hội vàng nằm gọn trong tay bạn</h2>
                                <p className="dowloadApp__left-text">
                                    <i className="fa-solid fa-circle-check dowloadApp__left-text-icon"></i> Tạo CV, Profile ngay trên điện thoại
                                </p>
                                <p className="dowloadApp__left-text">
                                    <i className="fa-solid fa-circle-check dowloadApp__left-text-icon"></i> Tìm kiếm và ứng tuyển công việc nhanh gọn, dễ dàng, mọi lúc mọi nơi
                                </p>
                                <p className="dowloadApp__left-text">
                                    <i className="fa-solid fa-circle-check dowloadApp__left-text-icon"></i> Liên lạc với nhà tuyển dụng qua TopCV Connect
                                </p>
                                <h3 className="dowloadApp__left-tilte-bottom">Tải ứng dụng tìm việc ngay</h3>
                                <div className="dowloadApp__left-img">
                                    <img src="./images/TrangChu/dowload/app_store.webp" alt="" className="dowloadApp__left-img-link"/>
                                    <img src="./images/TrangChu/dowload/chplay.webp" alt="" className="dowloadApp__left-img-link"/>
                                </div>
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <div className="dowloadApp__right">
                                <img src="./images/TrangChu/dowload/app-download.webp" alt="" className="dowloadApp__right-img-link"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutUs">
                <div className="grid wide">
                    <h2>Về chúng tôi</h2>
                    <h3>TopCV là công ty công nghệ nhân sự (HR Tech) hàng đầu Việt Nam. Với năng lực lõi là công nghệ, đặc biệt là trí tuệ nhân tạo (AI), sứ mệnh của TopCV đặt ra cho mình là thay đổi thị trường tuyển dụng - nhân sự ngày một hiệu quả hơn.
                        Bằng công nghệ, chúng tôi tạo ra nền tảng cho phép người lao động tạo CV, phát triển được các kỹ năng cá nhân, xây dựng hình ảnh chuyên nghiệp trong mắt nhà tuyển dụng và tiếp cận với các cơ hội việc làm phù hợp.</h3>
                    <div className="aboutUs-box">
                        <div className="row">
                            <div className="col l-3 m-12 ">
                                <div className="aboutUs-box-item">
                                    <p className="aboutUs-box-item-category">30.000+</p>
                                    <span className="aboutUs-box-item-name">Ứng viên đang bật tìm việc trung bình/thời điểm</span>
                                </div>
                            </div>
                            <div className="col l-3 m-12">
                                <div className="aboutUs-box-item">
                                    <p className="aboutUs-box-item-category">90.000+</p>
                                    <span className="aboutUs-box-item-name">Doanh nghiệp sử dụng dịch vụ</span>
                                </div>
                            </div>
                            <div className="col l-3 m-12">
                                <div className="aboutUs-box-item">
                                    <p className="aboutUs-box-item-category">120.000+</p>
                                    <span className="aboutUs-box-item-name">Nhà tuyển dụng sử dụng thường xuyên</span>
                                </div>
                            </div>
                            <div className="col l-3 m-12">
                                <div className="aboutUs-box-item">
                                    <p className="aboutUs-box-item-category">200.000+</p>
                                    <span className="aboutUs-box-item-name">Ứng viên tới mỗi tháng</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col l-3 m-12">
                                <div className="aboutUs-box-item">
                                    <p className="aboutUs-box-item-category">3.000.000+</p>
                                    <span className="aboutUs-box-item-name">Lượt ứng viên truy cập hàng tháng</span>
                                </div>
                            </div>
                            <div className="col l-3 m-12">
                                <div className="aboutUs-box-item">
                                    <p className="aboutUs-box-item-category">4.000.000+</p>
                                    <span className="aboutUs-box-item-name">Ứng viên tiềm năng</span>
                                </div>
                            </div>
                            <div className="col l-3 m-12">
                                <div className="aboutUs-box-item">
                                    <p className="aboutUs-box-item-category">60%</p>
                                    <span className="aboutUs-box-item-name">Ứng viên có trên 2 năm kinh nghiệm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="magazineTalk">
                <div className="grid wide">
                    <div className="magazineTalk-top">
                        <h2 className="magazineTalk-top-tilte">Báo chí nói về TopCV</h2>
                        <div className="magazineTalk-top-box">
                            <div className="row">
                                <div className="magazineTalk-top-box-img col l-2 m-4 c-4">
                                    <a href="#" className="magazineTalk-top-box-img-a">
                                        <img src="./images/TrangChu/magazineTalk/logo_bao_chi_01.webp" alt="" className="magazineTalk-top-box-img-link"/>
                                    </a>
                                </div>
                                <div className="magazineTalk-top-box-img col l-2 m-4 c-4">
                                    <a href="#" className="magazineTalk-top-box-img-a">

                                        <img src="./images/TrangChu/magazineTalk/logo_bao_chi_02.webp" alt="" className="magazineTalk-top-box-img-link"/>
                                    </a>
                                </div>
                                <div className="magazineTalk-top-box-img col l-2 m-4 c-4">
                                    <a href="#" className="magazineTalk-top-box-img-a">

                                        <img src="./images/TrangChu/magazineTalk/logo_bao_chi_03.webp" alt="" className="magazineTalk-top-box-img-link"/>
                                    </a>
                                </div>
                                <div className="magazineTalk-top-box-img col l-2 m-4 c-4">
                                    <a href="#" className="magazineTalk-top-box-img-a">

                                        <img src="./images/TrangChu/magazineTalk/logo_bao_chi_04.webp" alt="" className="magazineTalk-top-box-img-link"/>
                                    </a>
                                </div>
                                <div className="magazineTalk-top-box-img col l-2 m-4 c-4">
                                    <a href="#" className="magazineTalk-top-box-img-a">

                                        <img src="./images/TrangChu/magazineTalk/logo_bao_chi_05.webp" alt="" className="magazineTalk-top-box-img-link"/>
                                    </a>
                                </div>
                                <div className="magazineTalk-top-box-img col l-2 m-4 c-4">
                                    <a href="#" className="magazineTalk-top-box-img-a">

                                        <img src="./images/TrangChu/magazineTalk/logo_bao_chi_06.webp" alt="" className="magazineTalk-top-box-img-link"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="magazineTalk-bottom">
                        <h2 className="magazineTalk-bottom-tilte">Giải thưởng, thành tựu</h2>
                        <div className="magazineTalk-bottom-box row">
                            <div className="col l-3 m-3 c-12">
                                <div className="magazineTalk-bottom-box-magazine">
                                    <img src="./images/TrangChu/magazineTalk/award_01.webp" alt="" className="magazineTalk-bottom-box-magazine-img"/>
                                    <span className="magazineTalk-bottom-box-magazine-status">
                                        <i className="fa-solid fa-circle"></i>
                                        Starup
                                    </span>
                                    <a href="#" className="magazineTalk-bottom-box-magazine-link">Top 15 Startups xuất sắc của chương trình “Bình chọn Startup Việt 2018”</a>
                                    <a href="#" className="magazineTalk-bottom-box-magazine-viewmore">Xem Thêm </a>
                                </div>
                            </div>
                            <div className="col l-3 m-3 c-12">
                                <div className="magazineTalk-bottom-box-magazine">
                                    <img src="./images/TrangChu/magazineTalk/award_02.webp" alt="" className="magazineTalk-bottom-box-magazine-img"/>
                                    <span className="magazineTalk-bottom-box-magazine-status">
                                        <i className="fa-solid fa-circle"></i>
                                        Starup
                                    </span>
                                    <a href="#" className="magazineTalk-bottom-box-magazine-link">Top 15 Startups được Google lựa chọn tham gia Google for Startups Accelerator: Southeast Asia</a>
                                    <a href="#" className="magazineTalk-bottom-box-magazine-viewmore">Xem Thêm </a>
                                </div>
                            </div>
                            <div className="col l-3 m-3 c-12">
                                <div className="magazineTalk-bottom-box-magazine">
                                    <img src="./images/TrangChu/magazineTalk/award_03.webp" alt="" className="magazineTalk-bottom-box-magazine-img"/>
                                    <span className="magazineTalk-bottom-box-magazine-status">
                                        <i className="fa-solid fa-circle"></i>
                                        Technology
                                    </span>
                                    <a href="#" className="magazineTalk-bottom-box-magazine-link">Nhận giải thưởng Sao Khuê 2020 về lĩnh vực Nền tảng và công cụ tuyển dụng</a>
                                    <a href="#" className="magazineTalk-bottom-box-magazine-viewmore">Xem Thêm</a>
                                </div>
                            </div>
                            <div className="col l-3 m-3 c-12">
                                <div className="magazineTalk-bottom-box-magazine">
                                    <img src="./images/TrangChu/magazineTalk/award_04.webp" alt="" className="magazineTalk-bottom-box-magazine-img"/>
                                    <span className="magazineTalk-bottom-box-magazine-status">
                                        <i className="fa-solid fa-circle"></i>
                                        AI
                                    </span>
                                    <a href="#" className="magazineTalk-bottom-box-magazine-link">Nhận giải thưởng Sao Khuê 2021 với giải pháp ứng dụng AI vào tuyển dụng CV Scout TopMatch.AI</a>
                                    <a href="#" className="magazineTalk-bottom-box-magazine-viewmore">Xem Thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-gray">
                <div className="grid wide">
                    <div className="footer-gray-top">
                        <div className="row">
                            <div className="col l-3 m-3 c-12">
                                <div className="footer-gray-top-container">
                                    <span>Về TopCV <i className="fa-solid fa-angle-down" ></i> </span>
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
                                <div className="footer-gray-top-container">
                                    <span>Cộng đồng TopCv <i className="fa-solid fa-angle-down" ></i> </span>
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
                                <div className="footer-gray-top-container" >
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
                                <div className="footer-gray-top-container">
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
                                        <img src="./images/bottom/1.webp" alt=""/>
                                    </a>
                                    <a href="#" className="footer-gray-bottom-right-link">
                                        <img src="./images/bottom/2.webp" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


        <div className="modal hide">
            <div className="modal__overlay hide"></div>

            <div className="modal__body">
                <div className="auth-form hide">
                    <div className="auth-form__container">
                        <div className="auth-form__header">
                            <div className="auth-form__swith-btn-login">
                                <span className="auth-form__switch-btn">Đăng Nhập</span>
                            </div>
                            <h3 className="auth-form__heading">Đăng Ký</h3>
                        </div>

                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input type="text" className="auth-form__input" placeholder="Email của bạn"/>
                            </div>
                            <div className="auth-form__group">
                                <input type="password" className="auth-form__input" placeholder="Mật khẩu của bạn"/>
                            </div>
                            <div className="auth-form__group">
                                <input type="password" className="auth-form__input" placeholder="Nhập lại mật khẩu"/>
                            </div>
                        </div>

                        <div className="auth-form__aside">
                            <p className="auth-form__policy-text">
                                Bằng việc đăng kí, bạn đã đồng ý với Vinamilk-Shop về
                                <a href="" className="auth-form__text-link">Điều khoản dịch vụ </a> &
                                <a href="" className="auth-form__text-link">Chính sách bảo mật</a>
                            </p>
                        </div>

                        <div className="auth-form__controls">
                            <button className="btn auth-form__controls-back btn-nomal">TRỞ LẠI</button>
                            <button className="btn btn__primary">ĐĂNG KÝ</button>
                        </div>
                    </div>

                    <div className="auth-form__socials">
                        <a href="" className="auth-form__socials--fb btn btn--size-s btn--with-icon">
                            <i className="auth-form__socials-icon fa-brands fa-facebook-square"></i>
                            <span className="auth-form__socials-title">
                            Kết nối với Facebook
                        </span>
                        </a>
                        <a href="" className="auth-form__socials--gg btn btn--size-s btn--with-icon">
                            <i className="auth-form__socials-icon fa-brands fa-google"></i>
                            <span className="auth-form__socials-title">
                            Kết nối với Google
                        </span>
                        </a>
                    </div>
                </div>
                <div className="auth-form-login hide">
                    <div className="auth-form__container">
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">Đăng Nhập</h3>
                            <div className="auth-form__swith-btn-div">
                                <span className="auth-form__switch-btn">Đăng Ký</span>
                            </div>
                        </div>

                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input type="text" className="auth-form__input" placeholder="Email của bạn"/>
                            </div>
                            <div className="auth-form__group">
                                <input type="password" className="auth-form__input" placeholder="Mật khẩu của bạn"/>
                            </div>
                        </div>

                        <div className="auth-form__aside">
                            <div className="auth-form__help">
                                <a href="" className="auth-form__help-link
                                    auth-form__help-forgot">Quên mật khẩu</a>
                                <span className="auth-form__separate"></span>
                                <a href="" className="auth-form__help-link">Cần trợ
                                    giúp?</a>
                            </div>
                        </div>

                        <div className="auth-form__controls">
                            <button className="btn auth-form__controls-back
                                btn-nomal">TRỞ LẠI</button>
                            <button className="btn btn__primary">ĐĂNG NHẬP</button>
                        </div>
                    </div>

                    <div className="auth-form__socials">
                        <a href="" className="auth-form__socials--fb btn btn--size-s
                            btn--with-icon">
                            <i className="auth-form__socials-icon fa-brands
                                fa-facebook-square"></i>
                            <span className="auth-form__socials-title">
                                Kết nối với Facebook
                            </span>
                        </a>
                        <a href="" className="auth-form__socials--gg btn btn--size-s
                            btn--with-icon">
                            <i className="auth-form__socials-icon fa-brands
                                fa-google"></i>
                            <span className="auth-form__socials-title">
                                Kết nối với Google
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}