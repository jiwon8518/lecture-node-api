function capitialize(str){
    // return str; // 실패
    return str.charAt(0).toUpperCase() + str.slice(1); // 성공
}

module.exports = {
    capitialize: capitialize
};