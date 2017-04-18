function Themes()
{
    this.light = {
        nameAnimEndColor: "#FAFAFA",
        //userColors: ['#900','#009','#090','#909','#990','#099']
        userColor: function (originalColor) {
            return originalColor;
        }
    }

    this.dark = {
        nameAnimEndColor: "#222",
        //userColors: ['#c33','#33c','#3c3','#c3c','#cc3','#3cc']

        userColor: function (originalColor) {
            return originalColor.replace(/9/g, "e").replace(/0/g, "6");
        }
    }
}