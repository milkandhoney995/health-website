<template>
  <div class="section">
    <div class="wrapper__explanation">
      <form action="multipart/form-data" method="post">
        <div class="form__wrap">
          <dl class="form__table">
            <dt class="form__title">COMPANY</dt>
            <dd class="form__data">
              <input
                id=""
                class="form__input cubic-bezier__all"
                type="text"
                name=""
              />
            </dd>
            <dt class="form__title">NAME</dt>
            <dd class="form__data">
              <input
                id=""
                class="form__input cubic-bezier__all user-select"
                type="text"
                name=""
              />
            </dd>
            <dt class="form__title">E-mail</dt>
            <dd class="form__data">
              <input
                id=""
                class="form__input cubic-bezier__all user-select"
                type="text"
                name=""
              />
            </dd>
            <dt class="form__title">TEL</dt>
            <dd class="form__data">
              <input
                id=""
                class="form__input cubic-bezier__all user-select"
                type="text"
                name=""
              />
            </dd>
            <dt class="form__title">MESSAGE</dt>
            <dd class="form__data">
              <textarea
                id=""
                class="form__textarea border__bottom"
                type="text"
                name=""
                placeholder="( 50文字以上 / more than 50 capital )"
              />
              <div class="text__small">
                お返事をさせていただくまでに、お時間を要する場合がございます。
                <br />
                また、内容により、お返事が出来ない場合がございますのでご了承ください。
              </div>
            </dd>
            <dd class="form__btn">
              <button
                class="btn btn-send cubic-bezier__all link_fade"
                type="submit"
              >
                SEND
              </button>
            </dd>
          </dl>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contact',
}
</script>
