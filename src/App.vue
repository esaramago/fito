<template>
  <header class="c-header">
    
    <Stack gap="sm">
      <div>
        <h1>Fito</h1>
        <h2 class="page-subtitle">Informação de fitossanidade florestal</h2>
      </div>
      <p>Lista de localizações de árvores do <a href="https://fogos.icnf.pt/SGPP/RNMBListaInternetlist.asp" target="_blank">Fito</a> (Sistema de Gestão de Informação de Fitossanidade Florestal) do <a href="https://icnf.pt/" target="_blank">ICNF</a>.</p>
    </Stack>
  </header>

  <div class="wrapper">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style src="./styles/main.css"></style>
