import React from "react";
import * as S from "./styles";

const Post = () => {
  return (
    <S.Container>
      <S.PostContent>
        <S.Title>
          Understanding color theory: the color wheel and finding complementary
          colors
        </S.Title>
        <S.PostInfo>
          <S.PostTag>Front-End</S.PostTag>
          <S.Bullet>&bull;</S.Bullet>
          <S.PostDate>25/03/2022</S.PostDate>
        </S.PostInfo>

        <S.ImageContainer>
          <S.PostImage src="https://wallpapercave.com/wp/wp1940992.jpg" />
        </S.ImageContainer>

        <S.PostTextContainer>
          <S.PostText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            ultricies dignissim nibh, vitae accumsan enim pellentesque
            fermentum. <br/><br/>
            
            Phasellus auctor orci ante, ut tempus augue pulvinar id.
            Nullam pretium orci ultricies consequat finibus. Nunc sem libero,
            scelerisque a leo nec, mollis suscipit massa. Ut suscipit felis non
            sapien congue aliquet. Donec tincidunt, turpis nec consequat
            scelerisque, lacus felis tempus lorem, id egestas sem mauris semper
            ante. Vivamus sodales, leo finibus venenatis elementum, tellus lacus
            molestie diam, sed ultrices augue nunc ut neque. In hac habitasse
            platea dictumst. Aenean vel arcu sit amet enim scelerisque
            tincidunt. <br/><br/>
            
            Proin faucibus nibh a nibh consequat porta sed at felis.
            Etiam blandit risus at dolor mollis rhoncus. Sed convallis nisi est,
            vitae cursus diam bibendum ac. Praesent pellentesque, mi et volutpat
            porttitor, justo tellus eleifend tortor, quis iaculis mi ante sit
            amet nisi. Duis efficitur consequat porttitor. Maecenas id justo
            lorem. Praesent fringilla ex in lectus convallis condimentum.
            Maecenas volutpat libero id sagittis egestas. Mauris condimentum
            nisl diam, consectetur tincidunt enim euismod eu. Donec vitae mauris
            aliquam ex mattis sodales sit amet eget enim. Sed eget sodales
            tellus. Nulla vitae hendrerit augue. Integer at mi orci. Etiam vel
            elementum tellus. Cras rutrum suscipit augue vitae pretium. In nunc
            mauris, ullamcorper nec laoreet et, hendrerit eget odio. Aenean
            tempor, sem vel posuere aliquam, nulla nulla tempus felis, eu
            pretium nisi ante eu sapien.<br/><br/>
            
            Aenean nunc felis, eleifend nec ligula
            eu, placerat posuere lorem. Sed vitae imperdiet arcu, in venenatis
            justo. Duis vitae tempus nisi. Aliquam ac quam scelerisque, tempor
            ante id, venenatis velit. Phasellus non dapibus purus. Praesent
            vulputate a justo at molestie. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Duis tempor
            consectetur venenatis. Nullam semper tincidunt sapien sit amet
            consectetur. Ut laoreet diam in consectetur iaculis. Curabitur vitae
            tortor nec lectus posuere facilisis. Donec ullamcorper quam quis
            risus luctus hendrerit. Sed bibendum posuere iaculis. Donec feugiat
            nibh urna, id sodales diam pharetra ut. <br/><br/>
            
            Morbi a ante ex. Nam nec
            dapibus nulla. Fusce eget rutrum justo. Suspendisse lacus ligula,
            elementum eu mollis vitae, accumsan et dolor. Fusce interdum odio
            nisi, ac aliquet eros euismod sit amet. Phasellus non scelerisque
            libero. Vestibulum at ligula vel neque sollicitudin iaculis. Nullam
            eget vulputate odio. Nam eu arcu eu odio aliquet gravida quis ut
            lorem. Suspendisse id neque id enim fringilla pulvinar egestas nec
            dui. Nulla scelerisque velit nec odio pellentesque ultricies. Donec
            sed augue in elit gravida mollis. Aenean eu tincidunt est. Morbi
            interdum sodales blandit. Donec hendrerit imperdiet purus vitae
            rutrum. 
            
            Nulla ornare erat est, ac rhoncus arcu rhoncus ac. Sed
            pulvinar erat a nisl finibus accumsan. Nam placerat velit diam, eu
            tempor mi euismod ut. Nam condimentum orci nec ex ultrices
            convallis. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Vestibulum sem est, porttitor at
            iaculis id, sagittis ac nunc. Etiam lacinia augue leo. Donec elit
            ex, commodo in risus sit amet, pellentesque euismod orci. Vivamus eu
            lobortis purus. In lacinia arcu molestie tortor pretium consectetur.
            Duis eget est posuere, euismod lorem a, feugiat lacus. Curabitur
            viverra sapien non dictum aliquet. Quisque aliquam, leo at placerat
            feugiat, turpis nisl commodo nisl, sed gravida eros leo eu justo.
            Nunc id velit feugiat, consequat ligula tristique, sagittis erat.
            Suspendisse ex tellus, congue at posuere ultrices, condimentum id
            enim. Cras interdum enim sed semper tincidunt. Mauris condimentum
            maximus velit, quis aliquet ligula commodo sit amet. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Etiam et velit tortor. Aenean dapibus, elit ut elementum
            gravida, mauris ligula tristique est, vitae posuere velit ligula ut
            nisl. Praesent vel velit ut nunc mattis luctus ut sit amet nisi.
            Cras viverra eget augue eget vehicula. Suspendisse potenti.
            Pellentesque et dapibus mi. Sed quis urna enim. Proin varius
            pharetra lacus vel vehicula. Sed imperdiet convallis lectus in
            dapibus. Suspendisse rhoncus tristique ornare. Sed ullamcorper vitae
            tortor nec convallis. Duis interdum, arcu elementum rutrum pharetra,
            eros ipsum feugiat est, eget suscipit dolor est at quam. Etiam
            vestibulum ornare enim tincidunt vulputate. Sed sed nibh ullamcorper
            neque molestie mattis. Phasellus arcu mi, aliquam a consectetur
            eget, convallis sed ante. Pellentesque accumsan ut eros eu congue.
          </S.PostText>
        </S.PostTextContainer>
      </S.PostContent>
    </S.Container>
  );
};

export default Post;
