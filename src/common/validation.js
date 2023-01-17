/**
 * 이메일 체크
 */
function emailValidation(str) {
  // eslint-disable-next-line
  const reg = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.[a-zA-Z]{2,3}$/i;
  if (reg.test(str)) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

/**
 * 전화번호 체크
 */
function phoneValidation(str) {
  // const reg = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  const reg = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
  if (reg.test(str)) {
    return true;
  }
  return false;
}

function numberValidation(str) {
  const reg = /^[0-9]+$/;
  if (reg.test(str)) {
    return true;
  }
  return false;
}

/**
 * 이름 체크
 */
function nameValidation(str) {
  const reg = /[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z)]/gi;
  if (reg.test(str)) {
    return true;
  }
  return false;
}

/**
 * 생년월일 체크
 */
function birthDayValidation(str) {
  const reg = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
  if (reg.test(str)) {
    return true;
  }
  return false;
}

function validPhoneNumber(text) {
  const reg = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
  return !!(reg.test(text) === true && text.length > 9);
}

export {
  emailValidation,
  phoneValidation,
  nameValidation,
  birthDayValidation,
  validPhoneNumber,
  numberValidation,
};
