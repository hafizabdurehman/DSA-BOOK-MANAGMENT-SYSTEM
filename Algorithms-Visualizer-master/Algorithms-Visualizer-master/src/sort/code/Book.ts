export default class Book {
  name: string;
  color: string;
  
  constructor(name: string) {
    this.name = name.toUpperCase();
    this.color = this.getColor();
  }
  
  private getColor(): string {
    const firstLetter = this.name.charAt(0).toUpperCase();
    const colorMap: { [key: string]: string } = {
      A: "#FFBF00", // Amber
      B: "#0095B6", // Bondi Blue
      C: "#FFA07A", // Carrot Orange
      D: "#F0E68C", // Khaki
      E: "#50C878", // Emerald
      F: "#B22222", // Firebrick
      G: "#DAA520", // Goldenrod
      H: "#DF73FF", // Heliotrope
      I: "#FFFFF0", // Ivory
      J: "#00A86B", // Jade
      K: "#C3B091", // Khaki
      L: "#E6A8D7", // Orchid
      M: "#2F2F4F", // Dark Slate
      N: "#000080", // Navy
      O: "#FFA500", // Orange
      P: "#D1E231", // Pear
      Q: "#BEBEBE", // Gray
      R: "#8B0000", // Dark Red
      S: "#F4A460", // Sandy Brown
      T: "#008080", // Teal
      U: "#3F00FF", // Ultramarine
      V: "#8F00FF", // Violet
      W: "#F5DEB3", // Wheat
      X: "#F1B82D", // Gold
      Y: "#FFFF00", // Yellow
      Z: "#008000"  // Green
    };
    return colorMap[firstLetter] || "#7F8C8D";
  }
}

export{};