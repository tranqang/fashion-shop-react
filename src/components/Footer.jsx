import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function Footer() {
  return (
    <footer className='pt-5'>
      <div className='container pb-4'>
        <div className='row align-items-stretch'>
          <div className='col-xl-3 col-lg-3 col-md-8 col-sm-12 col-12 footer-left '>
            <Link to='/' title='Mew Fashion' className='logo'>
              <img
                src={images.logo}
                alt='Mew Fashion'
                className=' lazy img-fluid'
              />
            </Link>
            <div className='mt-1 mb-3'>
              Chúng tôi được thành lập từ tháng 4 năm 2020, với sứ mệnh đem lại
              những cảm giác hoàn toàn dị biệt khi lạc trong một vũ trụ cực kì
              dark với tông màu chủ đạo cyberpunk là signature.
            </div>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 footer-left  pl-xl-5'>
            <h3 className='footer-title mb-3 position-relative font-weight-bold mt-1'>
              Chính sách
            </h3>
            <ul className='links'>
              <li>
                <Link to='/' title='Chính sách mua hàng'>
                  Chính sách mua hàng
                </Link>
              </li>

              <li>
                <Link to='/' title='Chính sách vận chuyển'>
                  Chính sách vận chuyển
                </Link>
              </li>

              <li>
                <Link to='/' title='Chính sách thanh toán'>
                  Chính sách thanh toán
                </Link>
              </li>

              <li>
                <Link to='/' title='Chính sách đổi trả'>
                  Chính sách đổi trả
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 footer-left pl-xl-5'>
            <h3 className='footer-title mb-3 position-relative font-weight-bold mt-1'>
              Hỗ trợ
            </h3>
            <ul className='links'>
              <li>
                <Link to='/' title='Thông tin tư vấn 24/7'>
                  Thông tin tư vấn 24/7
                </Link>
              </li>

              <li>
                <Link to='/' title='Hưỡng dẫn mua hàng'>
                  Hưỡng dẫn mua hàng
                </Link>
              </li>

              <li>
                <Link to='/' title='Hướng dẫn thanh toán'>
                  Hướng dẫn thanh toán
                </Link>
              </li>

              <li>
                <Link to='/' title='Hướng dẫn đổi trả'>
                  Hướng dẫn đổi trả
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 footer-left pl-xl-5'>
            <h3 className='footer-title mb-3 position-relative font-weight-bold mt-1'>
              Sản phẩm
            </h3>
            <ul className='links'>
              <li>
                <Link to='/collections/all.html' title='Áo thun'>
                  Áo thun
                </Link>
              </li>

              <li>
                <Link to='/collections/all.html' title='Quần short'>
                  Quần short
                </Link>
              </li>

              <li>
                <Link to='/collections/all.html' title='Sơ mi dài tay'>
                  Sơ mi dài tay
                </Link>
              </li>

              <li>
                <Link to='/collections/all.html' title='Sơ mi ngắn tay'>
                  Sơ mi ngắn tay
                </Link>
              </li>

              <li>
                <Link to='/collections/all.html' title='Quần dài'>
                  Quần dài
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-12 col-md-4 col-sm-6 footer-left'>
            <h3 className='footer-title mb-3 position-relative font-weight-bold'>
              Thông tin liên hệ
            </h3>

            <p>
              Địa chỉ: Ladeco Building, 266 Doi Can Street, Ba Dinh District,
              Hanoi.
            </p>

            <p>
              Email:{' '}
              <Link to='mailto:support@sapo.vn' title='support@sapo.vn'>
                support@sapo.vn
              </Link>
            </p>

            <p>
              Số điện thoại:{' '}
              <Link to='tel:19006750' title='1900 6750'>
                1900 6750
              </Link>
            </p>

            <h3 className='footer-title mb-3 mt-3 position-relative font-weight-bold'>
              Kết nối với chúng tôi
            </h3>
            <div className='social position-relative'>
              <div className='onut pt-2 pb-2'>
                <Link
                  to='/#'
                  target='_blank'
                  className='position-relative iso sitdown modal-open d-inline-block facebook mr-1'
                  title='Facebook'
                >
                  <img src={images.facebook} alt='facebook' />
                </Link>
                <Link
                  to='/#'
                  target='_blank'
                  className='position-relative iso sitdown modal-open d-inline-block twitter mr-1'
                  title='Twitter'
                >
                  <img src={images.twitter} alt='twitter' />
                </Link>
                <Link
                  to='/#'
                  target='_blank'
                  className='position-relative iso sitdown modal-open d-inline-block instagram mr-1'
                  title='Instagram+'
                >
                  <img src={images.instagram} alt='instagram' />
                </Link>
                <Link
                  to='/#'
                  target='_blank'
                  className='position-relative iso sitdown modal-open d-inline-block youtube mr-1'
                  title='Youtube'
                >
                  <img src={images.youtube} alt='youtube' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='foo_bot pt-2 pb-2'>
        <div className='container'>
          <div className='row bgk align-items-center'>
            <div className='col-lg-8 col-md-6 col-sm-12 col-xs-12'>
              <div className='coppyright'>
                Bản quyền thuộc về{' '}
                <Link
                  rel='nofollow noopener'
                  to='https://www.facebook.com/mewtheme/'
                  title='MewTheme'
                  target='_blank'
                >
                  MewTheme
                </Link>
                .{' '}
                <span className='d-block d-sm-inline'>
                  Cung cấp bởi{' '}
                  <Link
                    to='/'
                    title='Sapo'
                    target='_blank'
                    rel='nofollow noopener'
                  >
                    Sapo
                  </Link>
                  .
                </span>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='footer-column-1 text-center'>
                <div className='payment-accept'>
                  <div>
                    <Link
                      to='/#'
                      className='position-relative iso sitdown modal-open d-inline-block mr-2'
                    >
                      <img
                        className='first lazy'
                        src={images.shopee}
                        alt='shopee'
                      />
                    </Link>

                    <Link
                      to='/#'
                      className='position-relative iso sitdown modal-open d-inline-block mr-2'
                    >
                      <img className=' lazy' src={images.tiki} alt='tiki' />
                    </Link>

                    <Link
                      to='/#'
                      className='position-relative iso sitdown modal-open d-inline-block mr-2'
                    >
                      <img className=' lazy' src={images.lazada} alt='lazada' />
                    </Link>

                    <Link
                      to='/#'
                      className='position-relative iso sitdown modal-open d-inline-block'
                    >
                      <img className=' lazy' src={images.sendo} alt='sendo' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
