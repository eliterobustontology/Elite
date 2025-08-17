export const FILEPICKER = (callback) => {

    const input = document.createElement("input");

    input.type = "file";

    
    input.style.display = "none";
    
    input.accept = "*/*";
    
    document.body.appendChild(input);
    
    input.addEventListener("change", function () {
    
        var file = this.files[0];
    
        if (!file) return;
    
        const MAX_SIZE = 10 * 1024 * 1024;
    
        if (file.size > MAX_SIZE) {
    
            TOAST("The file is too large. Please select a file smaller than 10MB.");
    
            return;
    
        }
    
        var reader = new FileReader();
    
        reader.onload = function (event) {
    
            var base64Data = event.target.result;
    
            callback(base64Data);
    
        };
    
        reader.readAsDataURL(file);
    
    });
    
    input.click();
    
    input.remove();

};