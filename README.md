## Introdução ao projeto
- Este é um gerador de senhas aleatórias feito para o processo seletivo da Comp Jr. O app consiste em uma tela 'welcome' que leva à uma tela de login, que realiza a autenticação ou cadastro do usuário. Ao ser autenticado o usuárrio é direcionado a uma tela que possui um carrossel (que está la como requisito do processo seletivo), um slider, para selecionar o tamanho da senha a ser gerada, e um botão para gerar a senha. Ao clicar no botão, ou segurar no campo preto onde fica a senha, pode-se salvar a senha, o que automaticamente a copia a senha para a área de digitação e a adiciona na aba 'passwords'. Na aba 'passwords', ao clicar e segurar em uma das senhas ela é apagada(existe um botão para copiar, mas ainda não está pronto).

## Como rodar
- algumas dependencias foram insataladas para a realização de testes, por isso não necessariamente todas são utilizadas.

- instale dependencias com

npm install @react-native-async-storage/async-storage
npm install --save @react-native-clipboard/clipboard
npm install --save @react-native-community/clipboard
npm install @react-native-community/slider --save
npm install --save @react-native-masked-view/masked-view
npm install @react-navigation/bottom-tabs
npm install @react-navigation/native
npm install @react-navigation/stack
npx expo install react-native-gesture-handler
npx expo install expo-clipboard
npx expo install expo-file-system
npx expo install expo-status-bar
npm install react-native-animatable --save
npm install react-native-deck-swiper --save
npx expo install react-native-gesture-handler
npm install react-native-safe-area-context
npx expo install react-native-screens
npm install --save react-native-snap-carousel

"expo": "^49.0.20",
"react": "18.2.0",
"react-native": "0.72.6",

- rode o comando de desenvolvimento

npm start

- escaneie o qr code com o app Expo Go ou use a url
-Ou aperte "a" para rodar o app em um emulador
