export default async function addMaterialFonts() {
    return new Promise((resolve) => {
        const material_font = new FontFace('material-icons',
            // pass the url to the file in CSS url() notation
            'url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)');
        document.fonts.add(material_font); // add it to the document's FontFaceSet
        material_font.load();
        resolve('success');
    });
}  