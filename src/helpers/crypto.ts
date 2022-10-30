import CryptoJS from "crypto-js";

export class Crypto {
  private secret;
  private readonly configObjAES;
  constructor() {
    this.secret = process.env.CRYPTO_SECRET;
    this.configObjAES = {
      iv: this.secret,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    };
  }

  async cryptoEncrypt(value) {
    return await CryptoJS.AES.encrypt(
      value,
      this.secret,
      this.configObjAES
    ).toString();
  }

  async cryptoDecrypt(value) {
    return await CryptoJS.AES.decrypt(
      value,
      this.secret,
      this.configObjAES
    ).toString(CryptoJS.enc.Utf8);
  }
}

export default new Crypto()
