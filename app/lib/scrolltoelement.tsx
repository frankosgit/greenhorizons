const scrollToElement = (id: any) => {
    if (typeof window !== 'undefined') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } }
  };