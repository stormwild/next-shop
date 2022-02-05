 1007  git st
 1008  git add --all && git ci -m 'Initial Commit'
 1009  npm init
 1010  git st
 1011  code .
 1012  git remote add origin git@github.com:stormwild/webcomponents.git
 1013  git branch -M main
 1014  git push -u origin main
 1015  eval $(ssh-agent -s) && ssh-add ~/.ssh/id_ed25519
 1016  git add --all
 1017  git st
 1018  git ci -m 'Web Component working - template in progress'
 1019  git push
 1020  yarn test
 1021  git st
 1022  git add --all && git ci -m 'Tests working'
 1023  git push
 1024  git remote add origin git@github.com:stormwild/react-testing.git
 1025  git branch -M main
 1026  git push -u origin main
 1027  yarn test
 1028  git st
 1029  git add --all && git ci -m 'Test updated'
 1030  git push
 1031  yarn start
 1032  eval $(ssh-agent -s) && ssh-add ~/.ssh/id_ed25519
 1033  cd source/repos/
 1034  ls
 1035  cd frontend/
 1036  ls
 1037  cd webcomponents/
 1038  code .
 1039  git st
 1040  git add --all
 1041  git st
 1042  git ci -m 'Module import working'
 1043  git push
 1044  git st
 1045  cd ..
 1046  ls
 1047  cd react
 1048  ls
 1049  mkdir react-testing
 1050  cd react-testing/
 1051  npx create-react-app
 1052  npx create-react-app .
 1053  code .
 1054  htop
 1055  cd source/repos/
 1056  ls
 1057  cd backend/
 1058  ls
 1059  ls ../workspace/
 1060  cd ../workspace/
 1061  exit
 1062  ls
 1063  npm run dev
 1064  git st
 1065  git remote -v
 1066  git add --all
 1067  git ci -m 'App working'
 1068  git remote add origin git@github.com:stormwild/nextjs-blog.git
 1069  git branch -M main
 1070  git push -u origin main
 1071  npm install tailwindcss postcss-preset-env postcss-flexbugs-fixes -D
 1072  npm install sass -D
 1073  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
 1074  npm install tailwindcss postcss-preset-env postcss-flexbugs-fixes -D
 1075  npm run dev
 1076  npm install @tailwindcss/typography -D
 1077  npm run dev
 1078  cd source/repos/
 1079  ls
 1080  ls github/
 1081  ls
 1082  cd frontend/
 1083  ls
 1084  mkdir nextjs
 1085  cd nextjs/
 1086  npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
 1087  ls
 1088  cd nextjs-blog/
 1089  code .
 1090  npm start
 1091  npm i
 1092  cd ..
 1093  rm -rf myapp/
 1094  npx express-generator
 1095  cd source/repos/
 1096  ls
 1097  ls workspace/
 1098  cd workspace/
 1099  mkdir myapp
 1100  cd myapp/
 1101  npx express-generator
 1102  code .
 1103  cd ..
 1104  ls
 1105  mkdir myapp
 1106  cd source/repos/
 1107  ls
 1108  tree -L 2 -d > tree.txt
 1109  sudo apt-get install tree
 1110  tree -L 2 -d > tree.txt
 1111  code tree.txt 
 1112  ls
 1113  cd github/
 1114  ls
 1115  git clone git@github.com:stormwild/notes.git
 1116  cd notes/
 1117  code .
 1118  cd ..
 1119  cd ~
 1120  ;s
 1121  ls
 1122  mkdir Projects
 1123  cd Projects/
 1124  mkdir -p LoanMarket/source
 1125  cd LoanMarket/source/
 1126  git config -h
 1127  git config -l
 1128  ls ~/.ssh/
 1129  ls -a ~
 1130  code ~/.bashrc
 1131  cat ~/.ssh/config
 1132  touch ~/.ssh/config
 1133  code ~/.ssh/config 
 1134  ssh-keygen -t ed25519 -C "alexander.torrijos@devpartners.co"
 1135  git pull
 1136  git st
 1137  git add --all && git stash
 1138  git co -b chore/update-docs-for-lmnopdf
 1139  git stash apply
 1140  git add --all
 1141  git ci -m 'Updated docs for LMnoPdf'
 1142  git push
 1143  git push --set-upstream origin chore/update-docs-for-lmnopdf
 1144  git st
 1145  git add --all
 1146  git ci -m 'Updated docs for LMnoPdf' && git push
 1147  git st
 1148  git add --all && git ci -m 'Updated docs for LMnoPdf'
 1149  git push
 1150  cd Projects/LoanMarket/source/
 1151  git clone git@github.com-alexphdev:loanmarket/mycrm-api.git
 1152  cat ~/.ssh/id_ed25519_alexphdev.pub 
 1153  git clone git@github.com-alexphdev:loanmarket/mycrm-api.git
 1154  ssh-add ~/.ssh/id_ed25519_alexphdev
 1155  git clone git@github.com-alexphdev:loanmarket/mycrm-api.git
 1156  cd mycrm-api/
 1157  code .
 1158  git config user.email
 1159  git config user.email alexander.torrijos@devpartners.co
 1160  git config user.email
 1161  git log -2
 1162  git log --oneline -10
 1163  git reset --soft HEAD~3
 1164  git st
 1165  git add --all && git ci -m 'Updated docs for LMnoPdf'
 1166  git push -f
 1167  code .
 1168  dotnet build
 1169  hostname
 1170  wsl -I hostname
 1171  wsl$ -I hostname
 1172  $wsl -I hostname
 1173  $wsl hostname
 1174  $wsl ip
 1175  $wsl ip -d
 1176  wsl hostname -I
 1177  cd Projects/
 1178  ls
 1179  cd LoanMarket/
 1180  ls
 1181  cd source/
 1182  ls
 1183  git@github.com-alexphdev:loanmarket/lm-no-pdf.git
 1184  git clone git@github.com-alexphdev:loanmarket/lm-no-pdf.git
 1185  ssh-add ~/.ssh/id_ed25519_alexphdev
 1186  git clone git@github.com-alexphdev:loanmarket/lm-no-pdf.git
 1187  cd lm-no-pdf/
 1188  code .
 1189  dotnet info
 1190  dotnet --info
 1191  curl http://localhost:5000/healthcheck
 1192  ping "$(hostname).local"
 1193  nc -zv "$(hostname).local" 80
 1194  ip route
 1195  curl http://172.30.80.0:5000/healthcheck
 1196  curl http://$(hostname).local:5000/healthcheck
 1197  curl http://DESKTOP-J9JBQP9:5000/healthcheck
 1198  curl http://http://172.30.89.16:5000/healthcheck
 1199  curl http://172.30.89.16:5000/healthcheck
 1200  git co prerelease 
 1201  git pull
 1202  git branch
 1203  git co chore/
 1204  git co chore/update-docs-for-lmnopdf 
 1205  git pull --rebase origin prerelease 
 1206  git co prerelease 
 1207  dotnet restore
 1208  clear && echo 0 > "/home/alexander/.vscode-server/extensions/ms-vsliveshare.vsliveshare-1.0.4836/out/terminal-exit-code-39435" && "/usr/bin/bash"  "/home/alexander/.vscode-server/extensions/ms-vsliveshare.vsliveshare-1.0.4836/out/deps/linux-prereqs.sh" || echo $? > "/home/alexander/.vscode-server/extensions/ms-vsliveshare.vsliveshare-1.0.4836/out/terminal-exit-code-39435" && exit 0
 1209  npm run init
 1210  cd angularjs/
 1211  yarn
 1212  git remote -v
 1213  cd ..
 1214  npm run init
 1215  yarn
 1216  cd angularjs/
 1217  yarn
 1218  cd Projects/LoanMarket/
 1219  ls
 1220  cd source/
 1221  ls
 1222  cd mycrm-api/
 1223  git remote -v
 1224  git clone git@github.com-alexphdev:alexphdev/LoanMarketWorkspace.git workspace
 1225  git st
 1226  mv workspace/ ..
 1227  cd ..
 1228  ls
 1229  mv workspace/ ..
 1230  cd ..
 1231  ls
 1232  cd source/
 1233  git clone git@github.com-alexphdev:loanmarket/mycrm-db.git
 1234  ls
 1235  git clone git@github.com-alexphdev:loanmarket/mycrm-local-db.git
 1236  ls
 1237  docker
 1238  docker --version
 1239  cat ~/.npmrc
 1240  vim ~/.npmrc 
 1241  cd Projects/LoanMarket/
 1242  cd source/
 1243  git clone git@github.com-alexphdev:loanmarket/mycrm-frontend.git
 1244  ls
 1245  code mycrm-api/
 1246  cd ..
 1247  code workspace/
 1248  code source/mycrm-api/
 1249  cd Projects/LoanMarket/source/
 1250  git clone git@github.com-alexphdev:loanmarket/mycrm-portal.git
 1251  cd mycrm-api/
 1252  docker-compose up -d
 1253  docker ps
 1254  docker inspect lpos
 1255  docker inspect  mycrm-api_lpos_1
 1256  docker-compose down
 1257  cd MyCRMAPI.WebHost
 1258  cd ..
 1259  docker-compose down
 1260  docker-compose up -d
 1261  docker-compose down
 1262  cd Projects/LoanMarket/source/
 1263  git clone git@github.com-alexphdev:loanmarket/mycrm-outfit.git
 1264  docker pull ghcr.io/loanmarket/mycrm-db/mycrm-db-migrations:latest-prerelease
 1265  docker run   --network=host   -it --rm   ghcr.io/loanmarket/mycrm-db/mycrm-db-migrations:latest-prerelease   upgrade   --server localhost,1433   --journalTableName MigrationHistory   --database USR_CRM   --dbtype SqlServer   --script scripts/migration_scripts_registry.txt   --adminuser SA   --adminpass Str0ngeR   --scripttimeout 600
 1266  cd mycrm-frontend/
 1267  cd ..
 1268  code mycrm-frontend/
 1269  cd mycrm-frontend/
 1270  npm run init
 1271  ssh-agent add ~/.ssh/id_ed25519_alexphdev
 1272  ls
 1273  ls -al
 1274  cat ~/.ssh/config
 1275  vim ~/.ssh/config
 1276  cat ~/.ssh/config
 1277  vim ~/.ssh/config
 1278  cat ~/.ssh/config
 1279  ssh-agent add ~/.ssh/id_ed25519_alexphdev
 1280  ls ~/.ssh/
 1281  cat ~/.ssh/id_ed25519_alexphdev
 1282  cat ~/.ssh/id_ed25519_alexphdev.pub 
 1283  ps
 1284  ps -a
 1285  ps -au
 1286  ls -a | grep bash
 1287  cat ~/.bashrc
 1288  vim ~/.bashrc
 1289  clear && echo 0 > "/home/alexander/.vscode-server/extensions/ms-vsliveshare.vsliveshare-1.0.4836/out/terminal-exit-code-926831" && "/usr/bin/bash"  "/home/alexander/.vscode-server/extensions/ms-vsliveshare.vsliveshare-1.0.4836/out/deps/linux-prereqs.sh" || echo $? > "/home/alexander/.vscode-server/extensions/ms-vsliveshare.vsliveshare-1.0.4836/out/terminal-exit-code-926831" && exit 0
 1290  ssh-add ~/.ssh/id_ed25519_alexphdev
 1291  cd Projects/
 1292  ls
 1293  mkdir CBR
 1294  cd ../source/
 1295  cd repos/
 1296  ls
 1297  mkdir -p mobile/flutter
 1298  cd mobile/flutter/
 1299  mkdir newapp
 1300  code newapp/
 1301  sudo snap install flutter --classic
 1302  sudo apt-add-repository ppa:zanchey/asciinema
 1303  asciinema
 1304  asciinema
 1305  sudo apt install asciinema
 1306  asciinema
 1307  asciinema --version
 1308  cd source/repos/
 1309  ls
 1310  cd backend/
 1311  ls
 1312  cd ..
 1313  mkdir dotnet
 1314  cd dotnet/
 1315  dotnet new 
 1316  dotnet new webapi -o HelloCode.Api
 1317  ls
 1318  code HelloCode.Api/
 1319  dotnet --info
 1320  cd source/repos/
 1321  ls
 1322  cd dotnet/
 1323  ls
 1324  docker run --name testdb -d -p 1433:1433 -e sa_password=G52ndT0ur -e ACCEPT_EULA=Y microsoft/mssql-server-windows-developer
 1325  docker pull mcr.microsoft.com/mssql/server
 1326  docker image ls
 1327  docker image ls --help
 1328  docker image ls -f {{.Name}}
 1329  docker image ls -f '{{id}}'
 1330  docker image ls -f 'repository=mcr.microsoft.com/mssql/server'
 1331  docker image ls -f 'tag='
 1332  docker image ls -f "label="
 1333  docker image ls -f "label=sql"
 1334  docker image ls -f "label=mcr.microsoft.com/mssql/server"
 1335  docker image ls -f "label=*"
 1336  docker image ls --format "{{.ID}}: {{.Repository}}"
 1337  docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@ssw0rd' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest
 1338  docker ps
 1339  ls
 1340  cd Projects/LoanMarket/
 1341  ls
 1342  cd source/
 1343  ls
 1344  ls mycrm-api/
 1345  git clone git@github.com-alexphdev:loanmarket/mycrm-active-deals.git
 1346  ls
 1347  dotnet --version
 1348  dotnet -V
 1349  dotnet -v
 1350  dotnet -d
 1351  dotnet -h
 1352  dotnet --info
 1353  dotnet new 
 1354  dotnet new sln -n MyCRM.Entities -o mycrm-entities
 1355  ls
 1356  cd mycrm-entities/
 1357  code .
 1358  dotnet new react -o MyCRM.Entities.Api 
 1359  ls
 1360  dotnet sln add MyCRM.Entities.Api/MyCRM.Entities.Api.csproj 
 1361  code .
 1362  cd ~
 1363  touch extensions.sh
 1364  vim extensions.sh 
 1365  cat extensions.sh 
 1366  vim extensions.sh 
 1367  chomd +x extensions.sh 
 1368  chmod +x extensions.sh 
 1369  ./extensions.sh 
 1370  cd Projects/LoanMarket/source/mycrm-entities/
 1371  ls
 1372  git init
 1373  touch .gitignore
 1374  vim .gitignore 
 1375  git add --all
 1376  git st
 1377  git ci -m 'Initial Commit'
 1378  git remote -v
 1379  git remote add origin git@github.com:stormwild/mycrm-entities.git
 1380  git branch -M main
 1381  git push -u origin main
 1382  git remote -v
 1383  docker run -it --name demoserver -p 3000:3000 demoserver
 1384  sudo cat /etc/hosts
 1385  sudo mv /etc/hosts /home/alexander
 1386  ls /etc
 1387  ls /etc/hosts
 1388  sudo cat /etc/hosts
 1389  sudo vim /etc/hosts
 1390  sudo cat /etc/hosts
 1391  sudo rm -rf /etc/hosts
 1392  sudo reboot
 1393  sudo cat /etc/hosts
 1394  sudo vim /etc/hosts
 1395  exit
 1396  sudo cat /etc/hosts
 1397  wsl pwd
 1398  sudo cat /etc/hosts
 1399  ./build.sh 
 1400  cd source/repos/
 1401  ls
 1402  cd node/
 1403  ls
 1404  cd demoserver/
 1405  cat serve
 1406  cat server.js 
 1407  cat run.sh 
 1408  cat serve.sh 
 1409  code .
 1410  docker ps | grep nginx
 1411  curl http://[::1]/
 1412  docker ps | grep nginx
 1413  docker ps
 1414  docker ps | grep nginx
 1415  curl http://localhost:8080/
 1416  docker run --name some-nginx -d -p 8080:80 some-content-nginx
 1417  cd source/repos/node/demoserver/
 1418  ./serve.sh 
 1419  ./run.sh 
 1420  curl http://localhost:3000/echo?message=hi
 1421  docker ps
 1422  docker ps | grep demoserver
 1423  curl http://127.0.0.1:3000/echo?message=hi
 1424  curl http://0.0.0.0:3000/echo?message=hi
 1425  docker stop demoserver
 1426  docker rm demoserver
 1427  docker ps -a | grep demo
 1428  docker rm 7537b
 1429  docker ps -a | grep demo
 1430  docker images ls
 1431  docker image ls
 1432  docker image ls | grep demo
 1433  npm install --save-dev jest
 1434  npm test
 1435  git st
 1436  git add --all
 1437  git st
 1438  git ci -m 'Updates'
 1439  git commit --amend
 1440  git log 
 1441  git push
 1442  git pull
 1443  npm install --save-dev typescript
 1444  ./node_modules/.bin/tsc --init
 1445  npm test
 1446  git st
 1447  git log --oneline -10
 1448  git add --all
 1449  git st
 1450  git stash
 1451  git co -b chore/setup-typescript
 1452  git add --all
 1453  git stash apply
 1454  git add --all && git ci -m 'Setup typescript - wip'
 1455  git push
 1456  git co main
 1457  free -m
 1458  free -h
 1459  top
 1460  cd source/repos/
 1461  ls
 1462  cd node/
 1463  ls
 1464  git clone git@github.com:stormwild/kebab-caser.git
 1465  cd kebab-caser/
 1466  code .
 1467  cd ..
 1468  ls
 1469  cd ..
 1470  ls
 1471  cd frontend/
 1472  ls
 1473  cd nextjs/
 1474  ls
 1475  sudo apt update
 1476  cd source/repos/
 1477  ls
 1478  cd frontend/
 1479  ls
 1480  cd nextjs/
 1481  ls
 1482  mkdir dj-events
 1483  cd dj-events/
 1484  npx create-next-app@latest --ts dj-events-frontend
 1485  cd Projects/
 1486  ls
 1487  cd LoanMarket/
 1488  ls
 1489  cd source/
 1490  ls
 1491  cd mycrm-portal/
 1492  yarn
 1493  yarn dev
 1494  dotnet test
 1495  ls
 1496  ls Microsoft/
 1497  ls Keys/
 1498  ls Keys/fsSL 
 1499  cd Keys/ 
 1500  ls
 1501  ls -l
 1502  cat fsSL 
 1503  cd ..
 1504  ls
 1505  ls Aws/
 1506  ls Keys/
 1507  cat Keys/fsSL 
 1508  ls
 1509  rm -rf Keys/
 1510  ls Microsoft/
 1511  ls extensions.sh 
 1512  cat hosts 
 1513  ls
 1514  ls nginx/
 1515  ls Projects/
 1516  ls source/
 1517  ls source/repos/
 1518  mkdir docs
 1519  mv extensions.sh docs/
 1520  ls
 1521  mkdir Downloads
 1522  mv Microsoft/ nginx/ Downloads/
 1523  ls
 1524  mv docs/ Docs
 1525  ls
 1526  ls -al
 1527  cd source/repos/dotnet/
 1528  ls
 1529  mkdir Autofixture
 1530  cd Autofixture/
 1531  dotnet --info
 1532  uname -a
 1533  lsb_release -a
 1534  wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
 1535  sudo dpkg -i packages-microsoft-prod.deb
 1536  ls
 1537  sudo apt-get update;   sudo apt-get install -y apt-transport-https &&   sudo apt-get update &&   sudo apt-get install -y dotnet-sdk-6.0
 1538  lsb_release -a
 1539  dotnet --info
 1540  wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
 1541  sudo dpkg -i packages-microsoft-prod.deb
 1542  rm packages-microsoft-prod.deb
 1543  sudo apt-get update
 1544  sudo apt-get install -y apt-transport-https
 1545  sudo apt-get update
 1546  sudo apt-get install -y dotnet-sdk-6.0
 1547  ls
 1548  ls -al
 1549  dotnet --info
 1550  uname
 1551  uname -a
 1552  dotnet new sln -n FixtureDemo 
 1553  ls
 1554  ls -al
 1555  rm -rf FixtureDemo.sln 
 1556  dotnet new sln -o FixtureDemo 
 1557  ls
 1558  ls FixtureDemo/
 1559  cd FixtureDemo/
 1560  ls
 1561  dotnet new
 1562  dotnet new -l
 1563  dotnet new xunit -o FixtureDemoTests
 1564  ls
 1565  ls FixtureDemoTests/
 1566  dotnet sln add FixtureDemoTests/FixtureDemoTests.csproj 
 1567  code .
 1568  ls
 1569  dotnet sln remove FixtureDemoTests/FixtureDemoTests.csproj 
 1570  rm -rf FixtureDemoTests/
 1571  dotnet new xunit -o FixtureDemo.Tests
 1572  ls
 1573  ls FixtureDemo.Tests/
 1574  dotnet sln add FixtureDemo.Tests/FixtureDemo.Tests.csproj 
 1575  code .
 1576  git st
 1577  git add --all && git ci -m 'Updated README.md'
 1578  git push
 1579  dotnet "add" "/home/alexander/source/repos/dotnet/Autofixture/FixtureDemo/FixtureDemo.Tests/FixtureDemo.Tests.csproj" "package" "autofixture"
 1580  cd "/home/alexander/source/repos/dotnet/Autofixture/FixtureDemo"
 1581  dotnet "new" "classlib" "-lang" "C#" "-n" "FixtureDemo.Domain" "-o" "FixtureDemo.Domain"
 1582  cd "/home/alexander/source/repos/dotnet/Autofixture/FixtureDemo"
 1583  dotnet "sln" "/home/alexander/source/repos/dotnet/Autofixture/FixtureDemo/FixtureDemo.sln" "add" "/home/alexander/source/repos/dotnet/Autofixture/FixtureDemo/FixtureDemo.Domain/FixtureDemo.Domain.csproj"
 1584  cd "/home/alexander/source/repos/dotnet/Autofixture/FixtureDemo/FixtureDemo.Tests"
 1585  dotnet "add" "/home/alexander/source/repos/dotnet/Autofixture/FixtureDemo/FixtureDemo.Tests/FixtureDemo.Tests.csproj" "reference" "/home/alexander/source/repos/dotnet/Autofixture/FixtureDemo/FixtureDemo.Domain/FixtureDemo.Domain.csproj"
 1586  git st
 1587  cd ..
 1588  curl https://raw.githubusercontent.com/github/gitignore/master/VisualStudio.gitignore -o .gitignore
 1589  git status
 1590  git add --all
 1591  git st
 1592  git ci -m 'Initial commit'
 1593  git remote add origin git@github.com:stormwild/FixtureDemo.git
 1594  git branch -M main
 1595  git push -u origin main
 1596  git st
 1597  git add --all && git commit -m 'Added README.md'
 1598  git push
 1599  ls
 1600  cat hosts 
 1601  ls Projects/
 1602  ls
 1603  cd Projects/LoanMarket/
 1604  ls
 1605  ls source/
 1606  ls workspace/
 1607  cd workspace/
 1608  git st
 1609  cat README.md 
 1610  git add --all && git stash
 1611  git pull
 1612  cd Projects/LoanMarket/source/
 1613  ls
 1614  cd mycrm-frontend/
 1615  git branch
 1616  git pull
 1617  cd ..
 1618  ls
 1619  cd mycrm-portal/
 1620  git pull
 1621  cd ..
 1622  ls
 1623  cd mycrm-active-deals/
 1624  git pull
 1625  git branch
 1626  cd Projects/LoanMarket/source/
 1627  ls
 1628  cd mycrm-db/ && git pull && cd ../mycrm-api && git pull
 1629  ls
 1630  git pull
 1631  git remote -v
 1632  git log --oneline -10
 1633  git branch
 1634  git branch -a
 1635  git co release
 1636  git branch -D prerelease
 1637  git co prerelease
 1638  git log --oneline -10
 1639  git branch release
 1640  git log release --oneline -10
 1641  git branch
 1642  git branch -D release
 1643  cd ../mycrm-api/
 1644  git st
 1645  git add --all && git reset --hard HEAD
 1646  git branch
 1647  git branch -r
 1648  git co rackspace-sit 
 1649  git branch -D prerelease 
 1650  git co prerelease
 1651  git pull
 1652  git log --oneline -10
 1653  git log -5
 1654  docker
 1655  ls -al
 1656  cd .docker/
 1657  ls
 1658  rm -rf contexts 
 1659  cd ..
 1660  ls .docker/
 1661  ls
 1662  ls -al
 1663  cd .docker/
 1664  ls
 1665  ls -al
 1666  sudo apt update
 1667  sudo apt list --upgradeable
 1668  sudo apt upgrade
 1669  cd ~/source/
 1670  ls
 1671  cd repos/
 1672  ls
 1673  cd streamlit/
 1674  ls
 1675  cd hello-world/
 1676  git st
 1677  cd ../..
 1678  ls
 1679  cd dotnet/
 1680  ls
 1681  cd Autofixture/
 1682  git st
 1683  cd ..
 1684  ls
 1685  cd ..
 1686  ls
 1687  cd github/
 1688  ls
 1689  cd stormwild.github.io/
 1690  git st
 1691  ls ~
 1692  ls -al ~
 1693  cat ~/.bashrc 
 1694  cd ~
 1695  ls -al
 1696  ls -al | grep bash
 1697  cat .bashrc
 1698  ls -al
 1699  ls -al | grep bash
 1700  ls -al | grep profile
 1701  cat .profile 
 1702  pwd
 1703  cd ~
 1704  pwd
 1705  cd ~
 1706  pwd
 1707  ls
 1708  ls
 1709  cd ~
 1710  ls -al
 1711  cd ~
 1712  pwd
 1713  ls
 1714  cd source/
 1715  ls
 1716  cd repos/
 1717  ks
 1718  ls
 1719  cat tree.txt 
 1720  tree -L 2
 1721  cd ~
 1722  pwd
 1723  cd ~
 1724  git st
 1725  git add --all && git ci -m 'Modified Github workflow'
 1726  git push
 1727  git st
 1728  git add --all && git ci -m 'Modified Github workflow'
 1729  git push
 1730  git add --all && git ci -m 'Modified Github workflow'
 1731  git push
 1732  docker login
 1733  docker
 1734  docker login
 1735  java --version
 1736  cd ~
 1737  ls
 1738  ls source/
 1739  ls
 1740  cd repos
 1741  ls
 1742  cd source/repos/
 1743  ls
 1744  ls workspace/
 1745  mkdir java
 1746  cd java
 1747  git clone git@github.com:nanuchi/my-project.git
 1748  cd my-project/
 1749  git remote -v
 1750  git remote set-url origin git@github.com:stormwild/my-project.git
 1751  git push -f
 1752  git co main
 1753  git fetch origin
 1754  git co main
 1755  git merge master 
 1756  git co master
 1757  git branch -D main
 1758  git co -b main
 1759  git push -f
 1760  git push --set-upstream origin main -f
 1761  git push origin :master
 1762  code .
 1763  docker login -u stormwild
 1764  kubectl
 1765  kubectl get pod
 1766  kubectl get services
 1767  kubectl create deployment nginx-depl --image=nginx
 1768  kubectl get deployment
 1769  kubectl get pod
 1770  kubectl get replicaset
 1771  ls
 1772  ls -al
 1773  kubectl edit deployment nginx-depl
 1774  k8 get pod
 1775  cd ~
 1776  ls -al
 1777  alias k=kubectl
 1778  k get pod
 1779  ls -al | grep bash
 1780  ls -al | grep profile
 1781  cat .bashrc
 1782  cat .profile
 1783  vim .profile 
 1784  cd ~
 1785  cd source/repos/
 1786  ls
 1787  tree -L 2
 1788  cd backend/
 1789  mkdir php
 1790  ls
 1791  cd ~
 1792  npm init -y
 1793  git st
 1794  git add --all
 1795  git st
 1796  git ci -m 'Initial app working'
 1797  git push
 1798  git st
 1799  git add --all
 1800  git st
 1801  git add --all
 1802  git st
 1803  git ci -m 'React sample working'
 1804  git push
 1805  git st
 1806  git add --all && git ci -m 'React working'
 1807  git push
 1808  git st
 1809  git add --all && git ci -m 'Class component working'
 1810  git push
 1811  git st
 1812  git add --all && git ci -m 'State based timer working'
 1813  git push
 1814  git st
 1815  npm i react react-dom next
 1816  ls
 1817  ls -al
 1818  ls a-l ..
 1819  cd ..
 1820  ls
 1821  cd react-app/
 1822  touch .gitignore
 1823  git st
 1824  git add --all && git ci -m 'Updates'
 1825  git push
 1826  git reset --soft HEAD~1
 1827  git st
 1828  git add --all
 1829  git st
 1830  git add --all
 1831  git st
 1832  git ci -m 'Updates'
 1833  git push -f
 1834  npm run dev
 1835  cd ~/source/repos/
 1836  ls
 1837  mkdir building-server-side-rendered-react-apps-beginners
 1838  mkdir pluralsight
 1839  mv building-server-side-rendered-react-apps-beginners/ pluralsight/
 1840  ls pluralsight/
 1841  cd pluralsight/building-server-side-rendered-react-apps-beginners/
 1842  ls
 1843  git clone git@github.com:pkellner/pluralsight-course-server-side-rendered-react-nextjs.git
 1844  ls
 1845  cd pluralsight-course-server-side-rendered-react-nextjs/
 1846  code .
 1847  npm run dev
 1848  cd /home/alexander/
 1849  ls
 1850  ls -al 
 1851  cd ~/source/repos/
 1852  ls
 1853  ls frontend/
 1854  ls frontend/nextjs/
 1855  ls
 1856  npx create-next-app@latest --ts
 1857  npx create-next-app@latest ideal-pancake --ts
 1858  ls
 1859  cd ideal-pancake/
 1860  code .
 1861  cd ..
 1862  ls
 1863  mv ideal-pancake/ frontend/nextjs/
 1864  ls
 1865  ls github/
 1866  cd github/stormwild.github.io/
 1867  ls
 1868  git branch
 1869  git st
 1870  git co master
 1871  git branch
 1872  git co -b nextjs
 1873  ls
 1874  npx create-next-app@latest --example gh-pages nextjsapp --ts
 1875  ls
 1876  cd nextjsapp/
 1877  ls
 1878  code .
 1879  cd ..
 1880  npx create-next-app@latest curvy-apple --ts
 1881  cd curvy-apple/
 1882  code .
 1883  cd ..
 1884  mv curvy-apple/ ../../frontend/nextjs/
 1885  ls
 1886  mv nextjsapp/ ../../frontend/nextjs/
 1887  cd ../../frontend/
 1888  ls
 1889  cd nextjs/
 1890  ls
 1891  cd ../../github/stormwild.github.io/
 1892  git branch
 1893  git branch -a
 1894  cd ~
 1895  npm i next react react-dom
 1896  npm run dev
 1897  cd ~/source/repos/frontend/nextjs/nextjs-by-example/
 1898  git clone git@github.com:mirkonasato/next-blog.git mirko-next-blog
 1899  cd mirko-next-blog/
 1900  git branch -a
 1901  git log --oneline -10
 1902  cd ..
 1903  ls
 1904  ls
 1905  cd source/repos/
 1906  ls
 1907  cd github/
 1908  ls
 1909  cd ..
 1910  ls
 1911  cd frontend/
 1912  ls
 1913  cd nextjs/
 1914  ls
 1915  mkdir nextjs-by-example
 1916  cd nextjs-by-example/
 1917  mkdir next-blog
 1918  cd next-blog/
 1919  code .
 1920  git remote -v
 1921  npm run dev
 1922  npm run build
 1923  npm start
 1924  npm run dev
 1925  cd ~/
 1926  cd source/repos/frontend/nextjs/nextjs-by-example/
 1927  ls
 1928  code workspace.code-workspace 
 1929  ls
 1930  cd next-blog/
 1931  git init
 1932  git st
 1933  git add --all && git ci -m 'Initial commit'
 1934  git remote add origin git@github.com:stormwild/next-blog.git
 1935  git branch -M main
 1936  git push -u origin main
 1937  cd ~
 1938  dotnet "add" "/home/alexander/source/repos/dotnet/ArraySamples/ArrayAccessLibTests/ArrayAccessLibTests.csproj" "reference" "/home/alexander/source/repos/dotnet/ArraySamples/ArrayAccessLib/ArrayAccessLib.csproj"
 1939  cd ~/source/repos/
 1940  ls
 1941  cd dotnet/
 1942  ls
 1943  dotnet new -l
 1944  dotnet new sln -o ArraySamples
 1945  ls
 1946  cd ArraySamples/
 1947  dotnet new classlib -o ArrayAccessLib
 1948  ls
 1949  dotnet sln add ArrayAccessLib/ArrayAccessLib.csproj 
 1950  dotnet new xunit -o ArrayAccessLibTests
 1951  dotnet sln add ArrayAccessLibTests/ArrayAccessLibTests.csproj 
 1952  ls
 1953  ./ArraySamples.sln
 1954  code .
 1955  dotnet tool install -g dotnet-format
 1956  dotnet format
 1957  git init
 1958  touch .gitignore
 1959  vim .gitignore 
 1960  git st
 1961  git add --all && git ci -m 'Initial commit'
 1962  git remote add origin git@github.com:stormwild/dotnet-array-samples.git
 1963  git branch -M main
 1964  git push -u origin main
 1965  dotnet restore
 1966  cd ~
 1967  git st
 1968  git add --all && git ci -m 'getPost working'
 1969  git push
 1970  npm i marked
 1971  git s
 1972  git st
 1973  git add --all && git ci -m 'Markdown parsing working'
 1974  git push
 1975  npm i gray-matter
 1976  git st
 1977  git add --all && git ci -m 'Dynamic routes working'
 1978  git push
 1979  git st
 1980  git add --all && git ci -m 'Home page shows list of posts'
 1981  git push
 1982  git st
 1983  git add --all && git ci -m 'ThemeSwitcher working'
 1984  git log --oneline -10
 1985  git push
 1986  npm run build
 1987  npx next export -o dist
 1988  npx serve dist
 1989  git st
 1990  rm -rf dist/
 1991  npm run dev
 1992  npm run build
 1993  npm run start
 1994  npm run dev
 1995  clear
 1996  npm run dev
 1997  npm install --save-dev @types/react @types/node
 1998  git st
 1999  git add --all && git ci -m 'Enabled TypeScript'
 2000  git push
 2001  npm install -D tailwindcss postcss autoprefixer
 2002  npx tailwindcss init -p
 2003  git st
 2004  git add --all && git ci -m 'TailwindCss enabled'
 2005  git push
 2006  history > history.md
