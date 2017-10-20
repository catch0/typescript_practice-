var i:number

for(i=10; i<100; i++){
  if(i%4 == 0 && i%6==0 ){
    document.write("Dr Who")
    document.write("<br/>")
  }
  else if(i % 4 == 0){
    document.write("Dr. ")
    document.write("<br/>")
  }
  else if(i% 6 == 0 ){
    document.write(" Who")
    document.write("<br/>")
  }
  else
  document.write(""+ i)
  document.write("<br/>")
}
