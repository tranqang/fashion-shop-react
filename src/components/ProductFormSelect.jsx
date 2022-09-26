import React, { useEffect } from 'react';
import { useState } from 'react';
import { sizeData } from 'src/data/data';
import convertPrice from 'src/helpers/convertPrice';
import divideBy from 'src/helpers/divideBy';
import CartIcon from './icons/CartIcon';
import TickBoldIcon from './icons/TickBoldIcon';
function ProductFormSelect({ product, colorSelect, setColorSelect }) {
  const [sizeDisplay, setSizeDisplay] = useState([]);
  const [colorDisplay, setColorDisplay] = useState([]);
  const [sizeSelect, setSizeSelect] = useState({});
  const [price, setPrice] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const size = sizeData.filter(item =>
      divideBy('size', product.price).includes(item.id)
    );
    setSizeDisplay(size);
    setSizeSelect(size[0]);
    if (product.color_image) {
      setColorDisplay(product.color_image);
      setColorSelect(product.color_image[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  useEffect(() => {
    if (product.price) {
      const priceDisplay = product.price.find(
        item => item.color === colorSelect.color && item.size === sizeSelect.id
      );
      setPrice(priceDisplay);
    }
  }, [sizeSelect, colorSelect, product]);

  const handleSize = id => {
    setSizeSelect(id);
  };
  const handleColor = id => {
    setColorSelect(id);
  };
  return (
    <>
      <div className='product-info position-relative'>
        <span className='inventory_quantity text-success'>Còn hàng</span>
      </div>
      <div className='product-info position-relative'>
        Thương hiệu: <span id='vendor'>Mew Fashion</span>
      </div>
      <div className='product-info position-relative'>
        Loại: <span id='type'>Áo thun</span>
      </div>
      <form
        action='/cart/add'
        method='post'
        encType='multipart/form-data'
        id='add-to-cart-form'
      >
        <input
          type='hidden'
          name='productAlias'
          defaultValue='ao-thun-t-shirt-m-f-08'
        />
        <div className='row align-items-start pt-3 pb-2'>
          <div className='mb-4 px-3'>
            <div
              className='d-sm-flex align-items-center  swatch clearfix flex-wrap'
              data-option-index={0}
            >
              <div className='header font-weight-bold mb-2'>Kích thước</div>
              {/* <div className='swatch-element M position-relative mb-2 mr-2 float-left'>
              <input
                id='swatch-0-m'
                className='position-absolute w-100 m-0'
                type='radio'
                name='option-0'
                defaultValue='M'
                />
                <label
                title='M'
                htmlFor='swatch-0-m'
                className='border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
                >
                M
                </label>
                <div className='product-variation__tick position-absolute'>
                <TickBoldIcon />
                </div>{' '}
            </div> */}

              {sizeDisplay.map(size => (
                <div
                  key={size.id}
                  data-value={size.name}
                  className='swatch-element L position-relative mb-2 mr-2 float-left'
                >
                  <input
                    onChange={() => handleSize(size)}
                    checked={size.id === sizeSelect.id}
                    id='swatch-0-l'
                    className='position-absolute w-100 m-0'
                    type='radio'
                    name='option-0'
                    defaultValue={size.name}
                  />
                  <label
                    title={size.name}
                    htmlFor='swatch-0-l'
                    className='border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
                  >
                    {size.name}
                  </label>
                  <div className='product-variation__tick position-absolute'>
                    <TickBoldIcon />
                  </div>
                </div>
              ))}

              {/* <div
              data-value='XL'
              className='swatch-element XL position-relative mb-2 mr-2 float-left'
              >
              <input
              id='swatch-0-xl'
              className='position-absolute w-100 m-0'
              type='radio'
              name='option-0'
              defaultValue='XL'
              />
              <label
                title='XL'
                htmlFor='swatch-0-xl'
                className='border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
                >
                XL
              </label>
              <div className='product-variation__tick position-absolute'>
              <TickBoldIcon />
              </div>{' '}
            </div> */}
            </div>
            <div
              className='d-sm-flex align-items-center swatch-color swatch clearfix flex-wrap'
              data-option-index={1}
            >
              <div className='header font-weight-bold mb-2'>Màu sắc</div>
              {/* <div
              data-value='Vàng'
              className='swatch-element color Vàng position-relative mb-2 mr-2 float-left'
              >
              <input
              id='swatch-1-vang'
              className='position-absolute w-100 m-0'
                type='radio'
                name='option-1'
                defaultValue='Vàng'
                />
                <label
                title='Vàng'
                htmlFor='swatch-1-vang'
                className='sw-color-vang border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
                style={{ backgroundColor: 'rgb(232, 219, 0)' }}
                />
                <div className='product-variation__tick position-absolute'>
                <TickBoldIcon />
              </div>{' '}
            </div> */}

              {colorDisplay.map((color, index) => (
                <div
                  key={color.color}
                  data-value={color.color}
                  className='swatch-element color Nâu position-relative mb-2 mr-2 float-left'
                >
                  <input
                    onChange={() => handleColor(color)}
                    checked={color.color === colorSelect.color}
                    id='swatch-1-nau'
                    className='position-absolute w-100 m-0'
                    type='radio'
                    name='option-1'
                    defaultValue={color.color}
                  />
                  <label
                    title={color.color}
                    htmlFor='swatch-1-nau'
                    className='sw-color-nau border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
                    style={{
                      backgroundImage: `url("${color.images[index]}")`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                      backgroundColor: 'rgb(198, 123, 0)',
                    }}
                  />
                  <div className='product-variation__tick position-absolute'>
                    <TickBoldIcon />
                  </div>
                </div>
              ))}
              {/* <div
              data-value='Xám'
              className='swatch-element color Xám position-relative mb-2 mr-2 float-left'
              >
              <input
              id='swatch-1-xam'
              className='position-absolute w-100 m-0'
              type='radio'
              name='option-1'
              defaultValue='Xám'
              />
              <label
              title='Xám'
              htmlFor='swatch-1-xam'
              className='sw-color-xam border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
              style={{
                  backgroundImage:
                  'url("//bizweb.dktcdn.net/thumb/small/100/350/547/products/8-3-e51b441b-e810-4e33-b119-bcbaf7584942.jpg?v=1627031957763")',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundColor: 'rgb(184, 184, 184)',
                }}
                />
                <div className='product-variation__tick position-absolute'>
                <TickBoldIcon />
                </div>{' '}
                </div>
                <div
                data-value='Xanh'
                className='swatch-element color Xanh position-relative mb-2 mr-2 float-left'
                >
              <input
              id='swatch-1-xanh'
              className='position-absolute w-100 m-0'
              type='radio'
                name='option-1'
                defaultValue='Xanh'
              />
              <label
              title='Xanh'
              htmlFor='swatch-1-xanh'
              className='sw-color-xanh border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
              style={{
                  backgroundImage:
                  'url("//bizweb.dktcdn.net/thumb/small/100/350/547/products/8-4-7c2af471-eece-4228-94d5-e92c2b1931d2.jpg?v=1627031957763")',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundColor: 'rgb(0, 152, 255)',
                }}
                />
                <div className='product-variation__tick position-absolute'>
                <TickBoldIcon />
                </div>{' '}
                </div>
                <div
                data-value='Trắng'
                className='swatch-element color Trắng position-relative mb-2 mr-2 float-left'
                >
                <input
                id='swatch-1-trang'
                className='position-absolute w-100 m-0'
                type='radio'
                name='option-1'
                defaultValue='Trắng'
                />
                <label
                title='Trắng'
                htmlFor='swatch-1-trang'
                className='sw-color-trang border m-0 pl-1 pr-1 rounded float-left text-center text-uppercase'
                style={{
                  backgroundImage:
                  'url(//bizweb.dktcdn.net/thumb/small/100/350/547/products/8-6-5b4bb506-415f-4ecc-b110-90f3fe19689c.jpg?v=1627031957763)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
              <div className='product-variation__tick position-absolute'>
              <TickBoldIcon />
              </div>{' '}
            </div> */}
            </div>
            {price && (
              <div className='product-price font-weight-bold mt-2 mb-2 position-relative '>
                <span className='cl_swatch f_price'>Giá: </span>
                <span className='special-price m-0 cl_swatch'>
                  {convertPrice(price.unit_price)}
                </span>
                <del className='old-price m-0'>
                  {convertPrice(price.old_price)}
                </del>
              </div>
            )}
            {/* <div className='box-variant clearfix  d-none '>
            <fieldset className='form-group'>
              <div className='selector-wrapper'>
                <label htmlFor='product-selectors-option-0'>Kích thước</label>
                <select
                className='single-option-selector custom-select'
                data-option='option1'
                  id='product-selectors-option-0'
                >
                  <option value='M'>M</option>
                  <option value='L'>L</option>
                  <option value='XL'>XL</option>
                </select>
              </div>
              <div className='selector-wrapper'>
              <label htmlFor='product-selectors-option-1'>Màu sắc</label>
              <select
              className='single-option-selector custom-select'
              data-option='option2'
              id='product-selectors-option-1'
              >
                  <option value='Vàng'>Vàng</option>
                  <option value='Nâu'>Nâu</option>
                  <option value='Xám'>Xám</option>
                  <option value='Xanh'>Xanh</option>
                  <option value='Trắng'>Trắng</option>
                  </select>
                  </div>
              <select
                id='product-selectors'
                className='custom-select form-control'
                name='variantId'
                style={{ display: 'none' }}
              >
              <option value={45187781}>M / Vàng - 249.000₫</option>
                <option value={45441582}>M / Nâu - 0₫</option>
                <option value={45441583}>M / Xám - 249.000₫</option>
                <option value={45441584}>M / Xanh - 249.000₫</option>
                <option value={45441585}>M / Trắng - 249.000₫</option>
                <option value={45441586}>L / Vàng - 249.000₫</option>
                <option value={45441587}>L / Nâu - 249.000₫</option>
                <option value={45441588}>L / Xám - 249.000₫</option>
                <option value={45441589}>L / Xanh - 249.000₫</option>
                <option value={45441590}>L / Trắng - 249.000₫</option>
                <option value={45441591}>XL / Vàng - 249.000₫</option>
                <option value={45441592}>XL / Nâu - 249.000₫</option>
                <option value={45441593}>XL / Xám - 249.000₫</option>
                <option value={45441594}>XL / Xanh - 249.000₫</option>
                <option value={45441595}>XL / Trắng - 249.000₫</option>
                </select>
            </fieldset>
          </div> */}
            <div className='d-inline-flex banner-w position-relative modal-open buy_mewshoes clearfix bg_swatch align-items-center justify-content-center pt-2 pb-2 pl-3 pr-3'>
              <button
                type='submit'
                className='border-0 product-action_buy js-addToCart p-0 d-flex'
              >
                <CartIcon />
                <span className='mr-3'>Mua hàng</span>
              </button>
              <div className='product-quantity modal-open d-block'>
                <label htmlFor='qtym' style={{ fontSize: 0 }}>
                  Số lượng:
                </label>
                <div className='custom-btn-number d-inline-block form-inline border-0 position-relative'>
                  <input
                    type='text'
                    maxLength={2}
                    id='qtym'
                    name='quantity'
                    value={quantity}
                    onChange={() => setQuantity(quantity)}
                    className='border-0 form-control text-center prd_quantity font-weight-bold'
                  />
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    className='border-0 position-absolute minus'
                    type='button'
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      if (quantity < price.quantity) {
                        setQuantity(quantity + 1);
                      }
                    }}
                    className='border-0 position-absolute plus'
                    type='button'
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProductFormSelect;
