const HPHExports={
  downloadBackup(data){
    const backup={app:"HPH Estate Manager",version:"stage-11.5",createdAt:new Date().toISOString(),data};
    const blob=new Blob([JSON.stringify(backup,null,2)],{type:"application/json;charset=utf-8"});
    const stamp=new Date().toISOString().replace(/[:T]/g,"-").slice(0,16);
    this.downloadBlob(blob,`hph-backup-${stamp}.json`);
  },
  downloadBlob(blob,filename){
    const url=URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.href=url;
    link.download=filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }
};
