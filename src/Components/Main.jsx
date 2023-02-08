import React from "react";
import Card from "./Card";

function Main() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 z-10 w-full h-16 backdrop-filter backdrop-blur-sm border-t-0 border-[1px] border-gray-600 bg-black/50"></div>

      <div className=" w-full h-full bg-black/50 border-l-[1px] border-r-[1px] overflow-y-scroll border-gray-600">
        <div className="relative py-20 pl-20 flex flex-col w-full h-[200%]">
          <Card
            image={"images/bg.jpg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ipsum nec eleifend consequat, elit sem fringilla elit, at vulputate erat erat eu tellus. Integer posuere ex dictum ex euismod, sit amet rhoncus turpis condimentum. Vivamus finibus bibendum sem. Etiam eget rhoncus libero, eget condimentum ex. Fusce porta, quam vitae convallis mattis, ligula nulla facilisis risus, eget pharetra justo eros non erat. Mauris convallis tincidunt viverra. Nunc efficitur porta volutpat.Nullam rhoncus maximus magna et bibendum. Nam viverra leo quis ante ultricies, et viverra urna tempor. Praesent interdum tellus a lobortis vehicula. Ut quis lectus eget urna ornare varius. Curabitur sagittis dapibus dui, in tempor ante ultrices nec. Vestibulum magna massa, ultrices eget ultrices vitae, varius id mauris. Fusce et tortor id felis pretium pulvinar. Quisque pretium dui id eros pellentesque, nec malesuada lectus vulputate. Nullam est dolor, mollis sed sodales sed, posuere molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tincidunt justo, sed condimentum lorem porta maximus. Nullam vitae eleifend velit. Nulla mi lorem, porttitor sit amet lobortis eget, consequat ut dui."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
