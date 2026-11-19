
const supabaseUrl = "https://rsndakviombsnwebuegy.supabase.co"
const supabaseAnonKey = "sb_publishable_jLDAR7Kpb6W65lgmvpVSMA_9shoqFxk"
const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseAnonKey
)
//-------UI------
function updateUI(session) {
 if (session) {
  const user = session.user;
  
 }
 else {
  
 }
}
//-----check----
async function getSession() {
 const { data, error } = await supabaseClient.auth.getSession();
 if (error) {
  alert("Không thể kiểm tra trạng thái đăng nhập")
  return;
 }
 updateUI(data.session);
}

//----Phần đăng xuất
const textLogOut = document.getElementById("textLogOut");

textLogOut.addEventListener("click", async () => {

 const { data } = await supabaseClient.auth.getSession();
 if (!data.session) {
  alert("Bạn hiện chưa đăng nhập");
  return;
 }
 
 const { error } = await supabaseClient.auth.signOut();
  if (error) {
   alert("Đăng xuất thất bại: " + error.message);
   return;
  }
 alert("Đăng xuất thành công");
})
//-----theo dõi trạng thái
supabaseClient.auth.onAuthStateChange((event, session) => {
 updateUI(session);
});
getSession()

/*--------------Phần hiển thị thêm tính năng Menu -----------*/
    /* Nút mở menu */
document.getElementById("imageMenu").addEventListener("click", function () {
    document.querySelector(".menuBox").classList.remove("hidden");
    document.querySelector(".PhanBiDen").classList.remove("hidden");
});
    /* Nút đóng menu */
document.getElementById("menuClose").addEventListener("click", function () {
    document.querySelector(".menuBox").classList.add("hidden");
    document.querySelector(".PhanBiDen").classList.add("hidden");
});
