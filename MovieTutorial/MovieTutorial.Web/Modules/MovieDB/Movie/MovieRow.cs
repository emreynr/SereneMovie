using MovieTutorial.MovieDB.Columns;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace MovieTutorial.MovieDB;

[ConnectionKey("Default"), Module("MovieDB"), TableName("Movie")]
[DisplayName("Movies"), InstanceName("Movie")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class MovieRow : Row<MovieRow.RowFields>, IIdRow, INameRow
{
    const string jGenre = nameof(jGenre);

    [DisplayName("Movie Id"), Identity, IdProperty]
    public int? MovieId { get => fields.MovieId[this]; set => fields.MovieId[this] = value; }

    [DisplayName("Title"), Size(200), NotNull, QuickSearch(SearchType.StartsWith), NameProperty]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("Description"), Size(1000), QuickSearch]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Storyline"), QuickSearch]
    public string Storyline { get => fields.Storyline[this]; set => fields.Storyline[this] = value; }

    [DisplayName("Year"), QuickSearch(SearchType.Equals, numericOnly: 1)]
    public int? Year { get => fields.Year[this]; set => fields.Year[this] = value; }

    [DisplayName("Release Date")]
    public DateTime? ReleaseDate { get => fields.ReleaseDate[this]; set => fields.ReleaseDate[this] = value; }

    [DisplayName("Runtime (mins)")]
    public int? Runtime { get => fields.Runtime[this]; set => fields.Runtime[this] = value; }

    [DisplayName("Kind"), NotNull, DefaultValue(MovieKind.Film)]
    public MovieKind? Kind { get => fields.Kind[this]; set => fields.Kind[this] = value; }

    // [DisplayName("Genre"), ForeignKey(typeof(GenreRow)), LeftJoin(jGenre)]
    // [LookupEditor(typeof(GenreRow), InplaceAdd = true, DialogType = "MovieDB.Genre")]
    // public int? GenreId { get => fields.GenreId[this]; set => fields.GenreId[this] = value; }

    // [DisplayName("Genre"), Expression($"{jGenre}.Name")]
    // public string GenreName { get => fields.GenreName[this]; set => fields.GenreName[this] = value; }

    [DisplayName("Genres"), LookupEditor(typeof(GenreRow), Multiple = true), NotMapped]
    [LinkingSetRelation(typeof(MovieGenresRow), nameof(MovieGenresRow.MovieId), nameof(MovieGenresRow.GenreId))]
    public List<int> GenreList { get => fields.GenreList[this]; set => fields.GenreList[this] = value; }

    [DisplayName("Cast List"), NotMapped]
    [MasterDetailRelation(foreignKey: nameof(MovieCastRow.MovieId), ColumnsType = typeof(MovieCastColumns))]
    public List<MovieCastRow> CastList { get => fields.CastList[this]; set => fields.CastList[this] = value; }

    [DisplayName("Primary Image"), Size(100)]
    [ImageUploadEditor(FilenameFormat = "Movie/PrimaryImage/~")]
    public string PrimaryImage { get => fields.PrimaryImage[this]; set => fields.PrimaryImage[this] = value; }

    [DisplayName("Gallery Images")]
    [MultipleImageUploadEditor(FilenameFormat = "Movie/GalleryImages/~")]
    public string GalleryImages { get => fields.GalleryImages[this]; set => fields.GalleryImages[this] = value; }
    public class RowFields : RowFieldsBase
    {
        public Int32Field MovieId;
        public StringField Title;
        public StringField Description;
        public StringField Storyline;
        public Int32Field Year;
        public DateTimeField ReleaseDate;
        public Int32Field Runtime;
        public EnumField<MovieKind> Kind;
        // public Int32Field GenreId;
        // public StringField GenreName;
        public ListField<int> GenreList;
        public RowListField<MovieCastRow> CastList;
        public StringField PrimaryImage;
        public StringField GalleryImages;
    }
}