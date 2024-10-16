using Org.BouncyCastle.Asn1;
using Serenity.Navigation;
using MyPages = MovieTutorial.MovieDB.Pages;

[assembly: NavigationMenu(6000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(int.MaxValue, "Movie Database/Movies", typeof(MyPages.MoviePage), icon: "fa-video-camera")]
[assembly: NavigationLink(int.MaxValue, "Movie Database/Genres", typeof(MyPages.GenrePage), icon: "fa-thumb-tack")]
[assembly: NavigationLink(int.MaxValue, "Movie Database/Person", typeof(MyPages.PersonPage), icon: "fa-users")]

