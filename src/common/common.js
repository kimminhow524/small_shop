import Swal from "sweetalert2";

function confirmPopup(title, content, icon = "info") {
  return Swal.fire({
    title,
    html: content,
    icon,
    confirmButtonText: "OK",
  });
}

const LoginPop = () => {
  confirmPopup(
    "로그인이 필요한 서비스입니다!",
    "먼저 로그인 해주세요.",
    "warning"
  );
};

export { confirmPopup, LoginPop };
