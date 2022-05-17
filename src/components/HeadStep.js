const HeaderStep = () => {
  return (
    <div className="header__content">
      <a href>
        <img src="./images/Medical Notebook.png" alt />
      </a>
      <ul>
          <a href="./">
            <span>TRANG CHỦ</span>
          </a>
          <a href="#">
            <span>THÔNG TIN CÁ NHÂN</span>
          </a>
          <a href="./Inject">
            <span>ĐĂNG KÝ TIÊM CHỦNG</span>
          </a>
          <a href="#">
            <span>HỒ SƠ SỨC KHOẺ</span>
          </a>
        </ul>
      <button className="btn-grad">ĐĂNG XUẤT</button>
    </div>
  );
};

export default HeaderStep;
