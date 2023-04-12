let innerHTML = document.documentElement.innerHTML; document.documentElement.innerHTML = 'Allow Pop-Ups to view the site.<script>' + innerHTML.split('</iframe></script>')[1] + '</body></html>'; 
if (location.href.includes('g4g')) {
    let newWindow = window.open('about:blank'); 
    newWindow.document.open(); 
    newWindow.document.write('<html>' + innerHTML.split('</iframe><script>')[0] + '</iframe></body></html>')
}; 
window.close();