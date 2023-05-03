const isPalindrome = (text) => {
  const lowerCaseText = text.toLowerCase();
  const noSpacesLowerCaseText = lowerCaseText.replace(
    `/[.,:;()_?¿!¡-\s]/g`,
    ""
  );
  debugger;
};

isPalindrome("Jka.d-OLj");

export default isPalindrome;
