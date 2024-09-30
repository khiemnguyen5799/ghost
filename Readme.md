# This is very important file. 

Using this file, I can remember what I have done

docker cp 7a13f42b837cdcf688e7:/var/lib/ghost/content C:\Users\Khiem\Downloads\backup-20241012-2120

scp -r C:\Users\Khiem\Downloads\backup-20241012-2120 khiem@192.168.1.13:/home/khiem/Downloads

Trong luc push file co dung luong lon, gap loi
```
error: failed to push some refs to 'github.com:khiemnguyen5799/xemayphuoctho-backup.git'
```
Xu ly: tham khao cac trang 
*  https://git-lfs.github.com 
* https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository

Thuc hien cac lenh
```
  14 git lfs track "*.zip"
  17 git add .\.gitattributes
  18 git commit -m "Enable pushing large file"
  19 git push
```


-----


docker cp fa2a8f27dce8:/var/lib/mysql C:\Users\Khiem\Downloads\backup-20241012-2120\database
scp -r C:\Users\Khiem\Downloads\backup-20241012-2120\database khiem@192.168.1.13:/home/khiem/Downloads/database

docker cp d33d30daae59:/mnt C:\Users\Khiem\Downloads\backup-20241012-2120\database

