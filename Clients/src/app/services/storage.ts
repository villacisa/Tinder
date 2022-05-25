import { Storage } from '@capacitor/storage';
import { setStorage } from '../../services/storage';
import { Router } from '@angular/router';

export async function setStorage(key: string, value: any): Promise<void> {
  await Storage.set({
    key: key,
    value: JSON.stringify(value),
  });
}

export async function getStorage(key: string): Promise<any> {
  const item = await Storage.get({ key: key });
  return JSON.parse(item.value);
}

export async function removeStorage(key: string): Promise<void> {
  await Storage.remove({
    key: key,
  });
}

login(){
    console.log(this.email + " - " + this.password);
    setStorage('email', this.email);
}
constructor(private router: Router) {}
this.router.navigate(['/main'])

async getDataStorage(){
    this.email = await getStorage('email');
    console.log("---------->" + this.email);
}
