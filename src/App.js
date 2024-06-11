const App = () => {
  return (
    <>
      {/* Header */}
      <div id="header">
        <div className="container">
          <div className="row">
            <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
              <h1>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/logo-final-02.png"
                    alt
                  />
                </a>
              </h1>
            </div>
            <div id="search" className="col-lg-6 col-md-5 col-sm-12">
              <input
                placeholder="Tìm kiếm tài nguyên, phần mềm..."
                type="text"
                name="keyword"
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <div id="auth-cart" className="col-lg-3 col-md-4 col-sm-12">
              <button type="button" className="btn btn-outline-dark">
                Đăng nhập
              </button>
              <button type="button" className="btn btn-outline-dark">
                Giỏ hàng
              </button>
            </div>
          </div>
          <button
            className="navbar-dark navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* Navbar */}
      <div id="navbar">
        <div className="container">
          <div className="collapse" id="menu">
            <ul>
              <li className="menu-item">
                <a href="#">Giới thiệu</a>
              </li>
              <li className="menu-item">
                <a href="#">Membership</a>
              </li>
              <li className="menu-item">
                <a href="#">Plugins</a>
              </li>
              <li className="menu-item">
                <a href="#">Premium key</a>
              </li>
              <li className="menu-item">
                <a href="#">Themes</a>
              </li>
              <li className="menu-item">
                <a href="#">Blogs</a>
              </li>
              <li className="menu-item">
                <a href="#">Services</a>
              </li>
              <li className="menu-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Navbar */}
      {/* Slider */}
      <div id="content-slider">
        <div className="container">
          <div className="row">
            <div id="slider" className="col-lg-8 col-md-12 col-sm-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={3}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={4}
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./images/slider-1.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/slider-2.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/slider-3.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/slider-4.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/slider-5.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-target="#carouselExampleIndicators"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-target="#carouselExampleIndicators"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
            <div id="content-share" className="col-lg-4 col-md-12 col-sm-12">
              <h3>Chia sẻ mới nhất</h3>
              <div className="content-right">
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-1.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Sửa lỗi khung bình luận Facebook trên website WordPress
                      đột nhiên bị thu hẹp chiều rộng
                    </a>
                  </h4>
                </div>
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-2.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Hướng dẫn chèn Breadcrumbs cho website WordPress sử dụng
                      plugin Yoast Seo
                    </a>
                  </h4>
                </div>
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-3.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Thêm hiệu ứng ánh sáng khi hover vào ảnh bài viết trong
                      theme Flatsome
                    </a>
                  </h4>
                </div>
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-4.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Thêm hiệu ứng ánh sáng khi hover ảnh sản phẩm Woocommerce
                      bằng CSS
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Slider */}
      {/* Procedure */}
      <div id="procedure">
        <div className="container">
          <div className="procedure-main row card-deck">
            <div className="procedure-item card">
              <img
                width={65}
                height={65}
                className="procedure-item-left"
                src="./images/icon-1.jpg"
                alt
              />
              <div className="procedure-item-right">
                <h4>Phần mềm bản quyền</h4>
                <p>100% từ nhà phát triển</p>
              </div>
            </div>
            <div className="procedure-item card">
              <img
                width={65}
                height={65}
                className="procedure-item-left"
                src="./images/icon-2.jpg"
                alt
              />
              <div className="procedure-item-right">
                <h4>Update sản phẩm</h4>
                <p>Hỗ trợ update trọn đời</p>
              </div>
            </div>
            <div className="procedure-item card">
              <img
                width={65}
                height={65}
                className="procedure-item-left"
                src="./images/icon-3.jpg"
                alt
              />
              <div className="procedure-item-right">
                <h4>Thêm mới sản phẩm</h4>
                <p>Liên tục hàng tháng</p>
              </div>
            </div>
            <div className="procedure-item card">
              <img
                width={65}
                height={65}
                className="procedure-item-left"
                src="./images/icon-4.jpg"
                alt
              />
              <div className="procedure-item-right">
                <h4>Đặt hàng, thanh toán</h4>
                <p>Linh hoạt, bảo mật</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Procedure */}
      {/* Best Saller */}
      <div className="best-saller">
        <div className="container">
          <h3>Top items bán chạy</h3>
          <p>Tổng hợp những sản phẩm bán chạy nhất trong tháng.</p>
          <div className="products row row-cols-lg-5 row-cols-md-3 row-cols-2">
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-1.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Plugin mới: LearnDash All-in-One Bundle</a>
                </h4>
                <p>250.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-2.jpg" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Jet All-in-One Bundle ( Addon for Elementor)</a>
                </h4>
                <p>200.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-3.jpg" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Plugin bản quyền iThemes All-in-one Bundle</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-4.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">WPBakery Page Builder for WordPress</a>
                </h4>
                <p>60.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-5.jpg" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Theme wordpress đẹp: Dokan eCommerce Theme</a>
                </h4>
                <p>25.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-6.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Yoast Local SEO Premium bản quyền</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-7.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Yoast WooCommerce SEO Premium</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-8.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">iThemes Security Pro bản quyền vĩnh viễn</a>
                </h4>
                <p>100.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-9.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Astra WordPress Theme (2024)</a>
                </h4>
                <p>20.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-10.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Addons for Elementor Pro (Premium)</a>
                </h4>
                <p>10.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-11.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">WP Rocket – Make WP Load Fast in a Few Clicks</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-12.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Elementor PRO WordPress Page Builder</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-13.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Porto | Responsive WordPress + eCommerce </a>
                </h4>
                <p>200.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-14.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Plugin bán chạy: Yoast SEO Premium</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-15.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">
                    Flatsome | Multi-Purpose Responsive WooCommerce
                  </a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Best Saller */}
      {/* Hot Product */}
      <div className="best-saller hot-product">
        <div className="container">
          <h3>Gói sản phẩm hot</h3>
          <p>
            Dưới đây là một số gói sản phẩm hot tổng hợp của chúng tôi, mời bạn
            tìm xem.
          </p>
          <div className="products row row-cols-lg-5 row-cols-md-3 row-cols-2">
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-1.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Plugin mới: LearnDash All-in-One Bundle</a>
                </h4>
                <p>250.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-2.jpg" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Jet All-in-One Bundle ( Addon for Elementor)</a>
                </h4>
                <p>200.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-3.jpg" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Plugin bản quyền iThemes All-in-one Bundle</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-4.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">WPBakery Page Builder for WordPress</a>
                </h4>
                <p>60.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-5.jpg" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Theme wordpress đẹp: Dokan eCommerce Theme</a>
                </h4>
                <p>25.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-6.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Yoast Local SEO Premium bản quyền</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-7.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Yoast WooCommerce SEO Premium</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-8.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">iThemes Security Pro bản quyền vĩnh viễn</a>
                </h4>
                <p>100.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img className="img-fluid" src="./images/product-9.png" alt />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Astra WordPress Theme (2024)</a>
                </h4>
                <p>20.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-10.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Addons for Elementor Pro (Premium)</a>
                </h4>
                <p>10.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-11.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">WP Rocket – Make WP Load Fast in a Few Clicks</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-12.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Elementor PRO WordPress Page Builder</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-13.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Porto | Responsive WordPress + eCommerce </a>
                </h4>
                <p>200.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-14.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">Plugin bán chạy: Yoast SEO Premium</a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
            <div className="product-item">
              <div className="mask-effect product-item-inner">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="./images/product-15.png"
                    alt
                  />
                </a>
                <div className="product-item-inner-category">Bundle</div>
                <h4>
                  <a href="#">
                    Flatsome | Multi-Purpose Responsive WooCommerce
                  </a>
                </h4>
                <p>90.000₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hot Product */}
      {/* News */}
      <div id="news">
        <div className="container">
          <h3>Tin tức – bài viết mới cập nhật</h3>
          <p>
            Dưới đây là một số bài viết, tin tức tổng hợp của chúng tôi, mời bạn
            tìm đọc
          </p>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="news-list row row-cols-lg-3 row-col-md-3 row-cols-1">
                <div className="news-item">
                  <div className="mask-effect news-item-inner">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="./images/content-share-1.jpg"
                        alt
                      />
                    </a>
                    <h4>
                      <a href="#">
                        Sửa lỗi khung bình luận Facebook trên website WordPress
                        đột nhiên bị thu hẹp{" "}
                      </a>
                    </h4>
                    <p>
                      Chào các bạn, mấy hôm nay trên mạng đột nhiên xuất hiện
                      tình trạng
                    </p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="mask-effect news-item-inner">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="./images/content-share-2.jpg"
                        alt
                      />
                    </a>
                    <h4>
                      <a href="#">
                        Sửa lỗi khung bình luận Facebook trên website WordPress
                        đột nhiên bị thu hẹp{" "}
                      </a>
                    </h4>
                    <p>
                      Chào các bạn, mấy hôm nay trên mạng đột nhiên xuất hiện
                      tình trạng
                    </p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="mask-effect news-item-inner">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="./images/content-share-3.jpg"
                        alt
                      />
                    </a>
                    <h4>
                      <a href="#">
                        Sửa lỗi khung bình luận Facebook trên website WordPress
                        đột nhiên bị thu hẹp{" "}
                      </a>
                    </h4>
                    <p>
                      Chào các bạn, mấy hôm nay trên mạng đột nhiên xuất hiện
                      tình trạng
                    </p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="mask-effect news-item-inner">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="./images/content-share-4.jpg"
                        alt
                      />
                    </a>
                    <h4>
                      <a href="#">
                        Sửa lỗi khung bình luận Facebook trên website WordPress
                        đột nhiên bị thu hẹp{" "}
                      </a>
                    </h4>
                    <p>
                      Chào các bạn, mấy hôm nay trên mạng đột nhiên xuất hiện
                      tình trạng
                    </p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="mask-effect news-item-inner">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="./images/content-share-5.jpg"
                        alt
                      />
                    </a>
                    <h4>
                      <a href="#">
                        Sửa lỗi khung bình luận Facebook trên website WordPress
                        đột nhiên bị thu hẹp{" "}
                      </a>
                    </h4>
                    <p>
                      Chào các bạn, mấy hôm nay trên mạng đột nhiên xuất hiện
                      tình trạng
                    </p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="mask-effect news-item-inner">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="./images/content-share-6.jpg"
                        alt
                      />
                    </a>
                    <h4>
                      <a href="#">
                        Sửa lỗi khung bình luận Facebook trên website WordPress
                        đột nhiên bị thu hẹp{" "}
                      </a>
                    </h4>
                    <p>
                      Chào các bạn, mấy hôm nay trên mạng đột nhiên xuất hiện
                      tình trạng
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="content-right content-right-extends">
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-1.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Sửa lỗi khung bình luận Facebook trên website WordPress
                      đột nhiên bị thu hẹp chiều rộng
                    </a>
                  </h4>
                </div>
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-2.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Hướng dẫn chèn Breadcrumbs cho website WordPress sử dụng
                      plugin Yoast Seo
                    </a>
                  </h4>
                </div>
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-3.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Thêm hiệu ứng ánh sáng khi hover vào ảnh bài viết trong
                      theme Flatsome
                    </a>
                  </h4>
                </div>
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-4.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Thêm hiệu ứng ánh sáng khi hover ảnh sản phẩm Woocommerce
                      bằng CSS
                    </a>
                  </h4>
                </div>
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-5.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Cảnh giác web dính virut khi khôi phục xong không gỡ
                      plugin Duplicator
                    </a>
                  </h4>
                </div>
                <div className="mask-effect content-right-item">
                  <a href="#">
                    <img
                      width={95}
                      height={57}
                      src="./images/content-share-6.jpg"
                      alt
                    />
                  </a>
                  <h4>
                    <a href="#">
                      Code chèn Hotline và chat Facebook vào chân trang trên
                      giao diện mobile cho website
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End News */}
      {/* User VIP */}
      <div id="user-vip">
        <div id="user-vip-mask-image">
          <div id="user-vip-mask-color"></div>
        </div>
        <div id="user-vip-main" className="container">
          <h2>Trở thành hội viên VIP để hưởng những đặc quyền đẳng cấp</h2>
          <p>
            Cùng với hơn <span>5000+</span> khách hàng khác. Sử dụng 3000+ theme
            &amp; plugin bản quyền!
          </p>
          <a href="#">
            <span>Xem thêm</span> <i className="fa-solid fa-angle-right" />
          </a>
          <a href="#">
            <span>Tham gia ngay</span> <i className="fa-solid fa-gift" />
          </a>
        </div>
      </div>
      {/* End User VIP */}
      {/* Partner */}
      <div id="partner">
        <div className="container">
          <div className="procedure-main row card-deck">
            <div className="procedure-item card">
              <img
                width={65}
                height={65}
                className="procedure-item-left"
                src="./images/icon-1.jpg"
                alt
              />
              <div className="procedure-item-right">
                <h4>Phần mềm bản quyền</h4>
                <p>100% từ nhà phát triển</p>
              </div>
            </div>
            <div className="procedure-item card">
              <img
                width={65}
                height={65}
                className="procedure-item-left"
                src="./images/icon-2.jpg"
                alt
              />
              <div className="procedure-item-right">
                <h4>Update sản phẩm</h4>
                <p>Hỗ trợ update trọn đời</p>
              </div>
            </div>
            <div className="procedure-item card">
              <img
                width={65}
                height={65}
                className="procedure-item-left"
                src="./images/icon-3.jpg"
                alt
              />
              <div className="procedure-item-right">
                <h4>Thêm mới sản phẩm</h4>
                <p>Liên tục hàng tháng</p>
              </div>
            </div>
            <div className="procedure-item card">
              <img
                width={65}
                height={65}
                className="procedure-item-left"
                src="./images/icon-4.jpg"
                alt
              />
              <div className="procedure-item-right">
                <h4>Đặt hàng, thanh toán</h4>
                <p>Linh hoạt, bảo mật</p>
              </div>
            </div>
          </div>
          <div className="partner-list row row-cols-lg-6 row-cols-md-3 row-cols-2">
            <div className="card partner-item">
              <img className="img-fluid" src="./images/partner-1.png" alt />
            </div>
            <div className="card partner-item">
              <img className="img-fluid" src="./images/partner-2.png" alt />
            </div>
            <div className="card partner-item">
              <img className="img-fluid" src="./images/partner-3.png" alt />
            </div>
            <div className="card partner-item">
              <img className="img-fluid" src="./images/partner-4.png" alt />
            </div>
            <div className="card partner-item">
              <img className="img-fluid" src="./images/partner-5.png" alt />
            </div>
            <div className="card partner-item">
              <img className="img-fluid" src="./images/partner-6.png" alt />
            </div>
          </div>
        </div>
      </div>
      {/* End Partner */}
      {/* Footer Top */}
      <div id="footer-top">
        <div className="container">
          <div className="row">
            <div className="footer-top-item col-lg-3 col-md-6 col-sm-12">
              <h3>Thông tin</h3>
              <ul>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Tiêu chí bán hàng</a>
                </li>
                <li>
                  <a href="#">Điều khoản sử dụng</a>
                </li>
                <li>
                  <a href="#">Bảo mật thông tin</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="footer-top-item col-lg-3 col-md-6 col-sm-12">
              <h3>Hỗ trợ khách hàng</h3>
              <ul>
                <li>
                  <a href="#">Hướng dẫn mua hàng</a>
                </li>
                <li>
                  <a href="#">Hình thức thanh toán</a>
                </li>
                <li>
                  <a href="#">Quy định đổi sản phẩm</a>
                </li>
                <li>
                  <a href="#">Câu hỏi thường gặp</a>
                </li>
                <li>
                  <a href="#">Yêu cầu đổi sản phẩm</a>
                </li>
              </ul>
            </div>
            <div className="footer-top-item col-lg-3 col-md-6 col-sm-12">
              <h3>Hướng dẫn cơ bản</h3>
              <ul>
                <li>
                  <a href="#">Hướng dẫn kỹ thuật</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn tải sản phẩm</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn cập nhật sản phẩm</a>
                </li>
                <li>
                  <a href="#">Yêu cầu sản phẩm mới</a>
                </li>
                <li>
                  <a href="#">Tin cập nhật</a>
                </li>
              </ul>
            </div>
            <div className="footer-top-item col-lg-3 col-md-6 col-sm-12">
              <h3>Tùy chọn khách hàng</h3>
              <ul>
                <li>
                  <a href="#">Sản phẩm lẻ</a>
                </li>
                <li>
                  <a href="#">Bộ sản phẩm</a>
                </li>
                <li>
                  <a href="#">Thành viên</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top */}
      {/* Footer Bottom */}
      <div id="footer-bottom">
        <div className="container">
          <p>© Bản quyền thuộc về Vietpro Academy</p>
          <p>
            Hotline: <span>0915 003 033</span> - Website:{" "}
            <span>https://vietpro.edu.vn</span>
          </p>
        </div>
      </div>
      {/* End Footer Bottom */}
    </>
  );
};
export default App;
