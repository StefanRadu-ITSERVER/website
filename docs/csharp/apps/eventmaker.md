# Event Maker - UWP App

## What is it?

This is an event-management application that is able to manage events.

## Simple Use Case

"User starts the program. The program displays a list of events. The user can select, remove and add an event. The list updates with the new changes made by the user."

### Fully Dressed Use Case

The user starts the program.

The app shows a list of the existing events.

The user selects one of them in order to see a more detailed text about it.

The app will display that specific event.

The user can add or remove or edit the events.
 
**Scope**: Create events.

**Primary actors**:
**User**: Wants an application which will allow him to create some events.
**System**: Wants to accurately save and display the list of events to the user.

**Happy path scenario**:
1. The user starts the program.
2. The app shows a list of the existing events.
- The user can add a new event to the list of events.
- The user is able to select one of them in order to delete it, re-edit it, share it or pin it on the start.
- The user is able to sort the list by a desired criteria or to filter the list by a certain place or date.

## Artifacts

Domain Model
4.1 Start-Up and Interaction Diagram for Create Event
4.2 Interaction Diagram For Delete Event 

## Concepts

The creation of this app involves
- MVVM Architecture
- JSON and Persistency
- Commands and Blend
- ObservableCollection and DataBinding
- Singleton Pattern
- Async and Await
- XAML Value Converters

## Recommendation

In the associated `.pdf` files you will find all the Software Design Artifacts related to the OOA/D of this software product.

I recommend creating this application because you will get familiar with a lot of useful and frequently used concepts of UWP app development. 

The creation of this app may take between 1 – 4 hours depending on what you know, but certainly it will help you greatly and it will be a time well spent.

This file covers all the steps that you need to follow in order to create this application.

## Parts

I split the creation of the in several parts.

### Part A - Building the structure

1. Start the development
Create a new UWP (Universal Windows Platform) application and name it EventMaker.


2. Eliminate the default Page:

Delete the `MainPage.xaml`. 

Also, go to the page `App.xaml.cs` and change the RootFrame to `EventsPage` - this will be the new View which your application will start with. 

Since you are in this page, you can consider to remove the following code. Then, save and close it. (even though it has an error)

``` csharp
#if DEBUG
  if (System.Diagnostics.Debugger.IsAttached)
  {
    this.DebugSettings.EnableFrameRateCounter = true;
  }
#endif
```

3. Construct the MVVM structure

Add the following folders to your project: 
- Model, 
- View, 
- ViewModel, 
- Persistency, 
- Handler, 
- Common 
- Converter.

4. Add the homepage to your application

In the View folder create a new Blank Page (not a XAML View) and call it `EventsPage.xaml`.

5. Create the business class Event

In the Model folder create a new class called Event with the following properties:
- int Id, 
- string Name, 
- string Description, 
- string Place, 
- DateTime DateTime
- two constructors (one that puts the properties into an initial state and one that has a list of five parameters from which you initialize the properties). 
- override the ToString() method.

``` csharp
internal class Event
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Place { get; set; }
    public DateTime DateTime { get; set; }
    // If this constructor is called, the properties are put into a initial desired state.
    public Event()
    {
        Id = 0;
        Name = string.Empty;
        Description = string.Empty;
        Place = string.Empty;
        DateTime = DateTime.Now;
    }
    // Here is the overloaded constructor that has a list of five parameters.
    public Event(int id, string name, string description, string place, DateTime dateTime)
    {
        Id = id;
        Name = name;
        Description = description;
        Place = place;
        DateTime = dateTime;
    }
    // Here we override the ToString() method.
    public override string ToString()
    {
        return $"Id: {Id}, Name: {Name}, Description: {Description}, Place: {Place}, DateTime: {DateTime : d}";
    }
}
```

6. Implement the Singleton Pattern

In the **Model** folder create a new class called `EventCatalogSingleton`.

This class will be a singleton with an `ObservableCollection` of `Event` objects (let the constructor initialize some Events).

Create an `AddEvent` method that can add an Event to the ObservableCollection.

I normally mark the Singleton classes as `sealed`.

``` csharp
internal sealed class EventCatalogSingleton
{
    // This class is a singleton class, which implies that in the whole application there is only one   instance of this class (never two).
    public static EventCatalogSingleton Instance { get; } = new EventCatalogSingleton();

    public ObservableCollection<Event> AllEvents { get; }

    private EventCatalogSingleton()
    {
        AllEvents = new ObservableCollection<Event>
        {
            new Event(1, "Wedding", "John's wedding", "Paris", new DateTime(2003,04,05)),
            new Event(2, "Football Match", "The new match", "London", new DateTime(2000,04,18)),
            new Event(3, "Shopping", "From the local market", "Copenhagen", new DateTime(1998,07,30))
        };
    }

    public void AddEvent(Event newEvent)
    {
        AllEvents.Add(newEvent);
    }
}
```

::: warning
The default constructor is public, so even though this constructor is empty we still need to write it in order to make it private as required by the Singleton Pattern.
:::

7. Add the ViewModel class

In the ViewModel folder create a class called `EventViewModel` which will be your binding source class. 

Also, add a property that refers to the `EventCatalogSingleton`.

Create an instance of the `EventCatalogSingleton` in the constructor of the EventViewModel.

``` csharp
internal class EventViewModel
{
    public EventCatalogSingleton CatalogSingleton { get; set; }

    // In the constructor of the ViewModel class we need to instantiate the Model class.

    public EventViewModel()
    {
        CatalogSingleton = EventCatalogSingleton.Instance;
    }
}
```

8. Finishing Part A

Rebuild the project and correct the error(s).


### Part B - Setting things up

1. Set the DataContext

Next, we need to expose the binding source class which is the EventViewModel from the page of markup. 

There are two ways to go about this:
- to add the `EventViewModel` as the `DataContext` to the `EventsPage`.
- to add a property of type `EventViewModel` in the code behind.

I prefer the first option with the mention of naming it by using x:Name attribute.

``` xml
<Page
   xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
   xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
   xmlns:local="using:EventMaker.Model"
   xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
   xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"   
   x:Class="EventMaker.View.EventsPage"
   mc:Ignorable="d"
   xmlns:viewModel="using:EventMaker.ViewModel“>
   <Page.DataContext>
       <viewModel:EventViewModel x:Name="ViewModel"/>
   </Page.DataContext>
   <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
      
   </Grid>
</Page>
```

2. Add the ListView control

Add a `ListView` to the EventPage and bind the ListView ItemSource to AllEvents in the EventCatalogSingleton from the EventViewModel. 

If the binding was set correctly, the Events from the ObservableCollection that you have bound in the ListView control will show up in the Designer.

``` xml
<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
    <ListView ItemsSource="{x:Bind ViewModel.CatalogSingleton.AllEvents, Mode=OneWay}"
              HorizontalAlignment="Center">
    </ListView>
</Grid>
```

3. Create the DataTemplate

Optionally, implement the layout for the EventsPage.xaml.

Try to use Blend to create a DataTemplate to style the items of the ListView.

::: tip Note
I used the {x:Bind} markup extension where possible, and the more flexible (but less performant) {Binding} markup extension where necessary.
:::

``` xml
<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
  <ListView 
    ItemsSource="{x:Bind ViewModel.CatalogSingleton.AllEvents, Mode=OneWay}"
    HorizontalAlignment="Center">
    <ListView.ItemTemplate>
      <DataTemplate x:DataType="local:Event">
        <StackPanel Margin="20" Width="300">
          <StackPanel Orientation="Horizontal">
            <TextBlock Text="{x:Bind Id, Mode=OneWay}" Margin="0,0,10,0"></TextBlock>
            <TextBlock Text="{x:Bind Name, Mode=OneWay}" Margin="20,0,10,0"></TextBlock>
            <TextBlock Text="{x:Bind Place, Mode=OneWay}" Margin="20,0,10,0"></TextBlock>
          </StackPanel>
            <TextBlock Text="{x:Bind DateTime, Mode=OneWay}“
                Style="{StaticResource TitleTextBlockStyle}"></TextBlock>
            <TextBlock Text="{x:Bind Description, Mode=OneWay}“
                Style="{StaticResource CaptionTextBlockStyle}"></TextBlock>
          </StackPanel>
        </StackPanel>
      </DataTemplate>
    </ListView.ItemTemplate>
  </ListView>
</Grid>
```

4. Creating a Value Converter class

There is a issue with the above rendering. The date of the Event is of type DateTime and it is shown with more precision than we need.

You need to create a new class which will implement the IValueConverter interface and in the Convert method you have to apply the format passed through the parameter object.

``` csharp
internal class StringFormatter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        var formatString = parameter as string;

        return string.IsNullOrEmpty(formatString) ? value.ToString() 
            : string.Format(formatString, value);
    }

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        throw new NotImplementedException();
    }
}
```

5. Consuming the XAML Value Converter

You need to add an instance of the StringFormatter class to the Page.Resources.

In the binding to the DateTime of the Event, you have to add the Converter property which will be bound to this instance and a ConverterParameter which will contain the format in which you want to display the date of the Event object in the ListView.

``` xml
<Page.Resources>
  <converter:DateTimeValueConverter x:Key="DateTimeValueConverter"/>
</Page.Resources>
```

``` xml
<TextBlock Text="{x:Bind ViewModel.SelectedEvent.DateTime, Mode=OneWay,
  Converter={StaticResource DateTimeValueConverter}, 
  ConverterParameter=Released: \{0:d\}}"
/>
```

6. Implement the INotifyPropertyChanged

The EventViewModel should implement the INotifyPropertyChanged interface.

Add the interface and then click on the error to let Visual Studio implement the interface.

``` csharp
internal class EventViewModel : INotifyPropertyChanged
{
    public EventCatalogSingleton CatalogSingleton { get; set; }

    // In the constructor of the ViewModel class we need to instantiate the Model class.
    public EventViewModel()
    {
        CatalogSingleton = EventCatalogSingleton.Instance;
    }


    /// <summary>
    /// Implementation for INotifyPropertyChanged interface.
    /// </summary>
    public event PropertyChangedEventHandler PropertyChanged;

    [NotifyPropertyChangedInvocator]
    protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}
```

7. Add a new View

Create a new Blank Page called CreateEventPage.xaml in the View folder, with suitable controls (such as TextBlock and TextBox) so that the user is able to add information about Event objects. 

Also use the DatePicker and TimePicker for the date and, respectively, time information. Set the DataContext of this page to be the EventViewModel. 

Optionally, implement the layout.

``` xml
<Page
    x:Class="EventMaker.View.CreateEventPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:EventMaker.View"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:viewModel="using:EventMaker.ViewModel"
    mc:Ignorable="d">

    <Page.DataContext>
        <viewModel:EventViewModel x:Name="ViewModel"/>
    </Page.DataContext>

    <StackPanel Background="{ThemeResource ApplicationPageBackgroundThemeBrush}"
                Padding="20">
        <TextBlock Text="ADD NEW EVENT" 
                   HorizontalAlignment="Center"
                   FontWeight="Light" 
                   FontSize="20"
                   />
        <TextBox Header="ID:" 
                 FontWeight="Light" 
                 FontSize="18"
                 />
                 <TextBox Header="Name:" 
                 FontWeight="Light" 
                 FontSize="18"
                 />
        <TextBox Header="Description:" 
                 FontWeight="Light" 
                 FontSize="18"
                 />
        <TextBox Header="Place:" 
                 FontWeight="Light" 
                 FontSize="18"
                 />
        <DatePicker Margin="10,20,10,20" 
                    HorizontalAlignment="Center" 
                    FontWeight="Light" 
                    FontSize="18"
                    />
        <TimePicker HorizontalAlignment="Center" 
                    FontWeight="Light" 
                    FontSize="18"
                    />
    </StackPanel>
</Page>
```

8. Add the Binding Sources
Add the following properties to the EventViewModel class:
- Event NewEvent
- DateTimeOffset Date
- TimeSpan TimePicker

Make them as full properties and make their set accessor subscribe to the PropertyChanged event (also pass the name of the property that has changed with the nameof operator).

``` csharp
private Event _newEvent;
private DateTimeOffset _date;
private TimeSpan _time;

public Event NewEvent
{
    get { return _newEvent; }
    set { _newEvent = value; OnPropertyChanged(nameof(NewEvent));}
}

public DateTimeOffset Date
{
    get { return _date; }
    set { _date = value; OnPropertyChanged(nameof(Date));}
}

public TimeSpan Time
{
    get { return _time; }
    set { _time = value; OnPropertyChanged(nameof(Time));}
}
```

9. Initialize the properties in the constructor

Update the constructor from the EventViewModel with code to initialize the NewEvent, Date and Time properties.

``` csharp
NewEvent = new Event();
var currentDate = DateTime.Now;
Date = new DateTimeOffset(currentDate.Year, currentDate.Month, currentDate.Day, 0, 0, 0, 0, new TimeSpan());
Time = new TimeSpan(currentDate.Hour, currentDate.Minute, currentDate.Second);  
```

10. Connect to the Binding Target

In the CreateEventPage, bind all Text properties of the Textboxes to the matching properties of the NewEvent from the EventViewModel class.

Bind the property Date of the control DatePicker to the Date in the EventViewModel and the property Time of the TimePicker to the Time property in the EventViewModel.

And do not forget to set the Mode to be TwoWay.

``` xml
<TextBox Header="ID:" 
  FontWeight="Light" 
  FontSize="18"
  Text="{x:Bind ViewModel.NewEvent.Id, Mode=TwoWay}"/>
<TextBox Header="Name:" 
  FontWeight="Light" 
  FontSize="18"
  Text="{x:Bind ViewModel.NewEvent.Name, Mode=TwoWay}"/>
<TextBox Header="Description:" 
  FontWeight="Light" 
  FontSize="18"
  Text="{x:Bind ViewModel.NewEvent.Description, Mode=TwoWay}"/>
<TextBox Header="Place:" 
  FontWeight="Light" 
  FontSize="18"
  Text="{x:Bind ViewModel.NewEvent.Place, Mode=TwoWay}"/>
<DatePicker Margin="10,20,10,20" 
    HorizontalAlignment="Center" 
    FontWeight="Light" 
    FontSize="18"
    Date="{x:Bind ViewModel.Date, Mode=TwoWay}"/>
<TimePicker HorizontalAlignment="Center" 
    FontWeight="Light" 
    FontSize="18"
    Time="{x:Bind ViewModel.Time, Mode=TwoWay}"/>
```

11. Add a Converter class

Create a class called DateTimeCoverter in the Coverter folder and add a method which is able to combine the two values that we get from the DataPicker and TimePicker into a DateTime variable.

``` csharp
internal class DateTimeConverter
{
    public static DateTime DateTimeOffsetAndTimeSpanToDateTime(DateTimeOffset date, TimeSpan time)
    {
        return new DateTime(date.Year, date.Month, date.Day, time.Hours, time.Minutes, 0);
    }
}
```

12. Add a Handler class

Create a class called EventHandler in the Handler folder.

This class must have a reference to the EventViewModel class and a constructor with one parameter that initializes this reference.

``` csharp
internal class EventHandler
{
    public EventViewModel EventViewModel { get; set; }

    public EventHandler(EventViewModel eventViewModel)
    {
        EventViewModel = eventViewModel;
    }
}
```

13. Add a method in the Handler

Add a CreateEvent method in the EventHandler that can create a new Event via the NewEvent from the EventViewModel and add it to the AllEvents from the EventCatalogSingleton class.

Also, use the method DateTimeOffsetAndTimeSpanToDateTime to convert the values of the Date and Time properties to an object of type DateTime.

``` csharp
public void CreateEvent()
{
    var date =  DateTimeConverter.DateTimeOffsetAndTimeSpanToDateTime(EventViewModel.Date, EventViewModel.Time);
    
    var newEvent = EventViewModel.NewEvent;
    newEvent.DateTime = date;
    EventViewModel.CatalogSingleton.AddEvent(newEvent);
}
```

14. Reference the Handler from ViewModel

Create a reference in the EventViewModel to the EventHandler class.

Create an instance of the EventHandler in the constructor of the EventViewModel.

``` csharp
public Handler.EventHandler EventHandler { get; set; }

public EventViewModel()
{
    ...

    EventHandler = new Handler.EventHandler(this);
}
```

15. Add the Navigation

Add navigation from EventsPage to CreateEventPage. 

Open the EventsPage in Blend. Add a CommandBar to the BottomAppBar in the EventsPage. Also change the Icon to be 'Add' and the label to be 'Add Event'.

From the Assets window select Behavior and then select NavigateToPageAction. In the Properties window set the TargetPage to be CreateEventPage.

You should add Navigation the either way around, from CreateEventPage to EventsPage.

``` xml
<Page.BottomAppBar>
    <CommandBar>
        <CommandBar.Content>
            <Grid/>
        </CommandBar.Content>
        <AppBarButton Icon="Add" Label="Add Event">
            <interactivity:Interaction.Behaviors>
                <core:EventTriggerBehavior EventName="Click">
                    <core:NavigateToPageAction TargetPage="EventMaker.View.CreateEventPage"/>
                </core:EventTriggerBehavior>
            </interactivity:Interaction.Behaviors>
        </AppBarButton>
        <AppBarButton Icon="Cancel" Label="appbarbutton"/>
    </CommandBar>
</Page.BottomAppBar>
```

``` xml
<Page.BottomAppBar>
    <CommandBar>
        <CommandBar.Content>
            <Grid/>
        </CommandBar.Content>
        <AppBarButton Icon="Accept" Label="appbarbutton"/>
        <AppBarButton Icon="Cancel" Label="Cancel">
            <interactivity:Interaction.Behaviors>
                <core:EventTriggerBehavior EventName="Click">
                    <core:NavigateToPageAction TargetPage="EventMaker.View.EventsPage"/>
                </core:EventTriggerBehavior>
            </interactivity:Interaction.Behaviors>
        </AppBarButton>
    </CommandBar>
</Page.BottomAppBar>
```

16. Use the Event Binding technique
Use the Accept button from the PrimaryCommands of the CreateEventPage and set the binding between the Click event of this button and the AddEvent method from the EventHandler.
Also, add the same code for the navigation to go to EventsPage after you add a new event.

``` xml
<AppBarButton Icon="Accept" Label="Add Event" Click="{x:Bind ViewModel.EventHandler.CreateEvent}">
    <interactivity:Interaction.Behaviors>
          <core:EventTriggerBehavior EventName="Click">
                  <core:NavigateToPageAction TargetPage="EventMaker.View.EventsPage"/>
          </core:EventTriggerBehavior>
    </interactivity:Interaction.Behaviors>
</AppBarButton>
```

### Part C - Persisting data asynchronously

1. Adding the NuGet Package

Go to the NuGet Package Manager and search for the NewtonSoft package and install it.

It will create a reference to the Newtonsoft.Json library.

2. Add the Persistency class to use JSON

Create a class called PersistencyService in the Persistency folder and you should add the following code to it:

``` csharp
internal class PersistencyService
{
    private const string JsonFileName = "EventsAsJson.dat";

    public static async Task SaveEventsAsJsonAsync(List<Event> events)
    {
        var notesJsonString = JsonConvert.SerializeObject(events);
        await SerializeEventsFileAsync(notesJsonString, JsonFileName);
    }

    public static async Task<List<Event>> LoadEventsFromJsonAsync()
    {
        var eventsJsonString = await DeSerializeEventsFileAsync(JsonFileName);
        if (eventsJsonString != null)
        {
            return (List<Event>)JsonConvert.DeserializeObject(eventsJsonString, typeof(List<Event>));
        }
        return null;
    }

    private static async Task SerializeEventsFileAsync(string eventsString, string fileName)
    {
        var localFile = await ApplicationData.Current.LocalFolder.CreateFileAsync(fileName,               
            CreationCollisionOption.ReplaceExisting);
        await FileIO.WriteTextAsync(localFile, eventsString);
    }

    private static async Task<string> DeSerializeEventsFileAsync(string fileName)
    {
        try
        {
            var localFile = await ApplicationData.Current.LocalFolder.GetFileAsync(fileName);
            return await FileIO.ReadTextAsync(localFile);
        }
        catch (FileNotFoundException)
        {
            await ApplicationData.Current.LocalFolder.CreateFileAsync(fileName, 
                    CreationCollisionOption.ReplaceExisting);
            return null;
        }
        catch(Exception)
        {
            MessageDialogHelper.Show("Something went wrong when reading the file with the saved events.", 
                                      "Error when reading file");
            return null;
        }
    }

    private static class MessageDialogHelper
    {
        public static async void Show(string content, string title)
        {
            var messageDialog = new MessageDialog(content, title);
            await messageDialog.ShowAsync();
        }
    }
}
```

3. Use Async and Await

For the EventCatalogSingleton to use the PersistencyService class, it needs to perform its operations asynchronously.

In order for your EventCatalogSingleton to operate in this manner, you need to change some of the signature of the methods so that they are async and return a Task, and also to modify some of the properties of this class.

4. Adding the NotifyTaskCompletion<TResult>

The first step for your application to run Asynchronously is to add the NotifyTaskCompletion<TResult> class. 

Why? Well, because code that uses Task.Wait or Task<T>.Result instead of await is synchronously bloking Async operations. 

The guideline is “async all the way” and it is respected through the usage of this class. By applying it, you avoid the major risk of having your application unresponsive.

Add the following class to the Common folder.

``` csharp
public sealed class NotifyTaskCompletion<TResult> : INotifyPropertyChanged
{
    public Task<TResult> Task { get; }

    public TResult Result => (Task.Status == TaskStatus.RanToCompletion) ? Task.Result : default(TResult);
    public TaskStatus Status => Task.Status;
    public bool IsCompleted => Task.IsCompleted;
    public bool IsNotCompleted => !Task.IsCompleted;
    public bool IsSuccessfullyCompleted => Task.Status == TaskStatus.RanToCompletion;
    public bool IsCanceled => Task.IsCanceled;
    public bool IsFaulted => Task.IsFaulted;
    public AggregateException Exception => Task.Exception;
    public Exception InnerException => Exception?.InnerException;
    public string ErrorMessage => InnerException?.Message;
    public event PropertyChangedEventHandler PropertyChanged;

    public NotifyTaskCompletion(Task<TResult> task)
    {
        Task = task;
        if (!task.IsCompleted)
        {
            var _ = WatchTaskAsync(task);
        }
    }

    private async Task WatchTaskAsync(Task task)
    {
        try
        {
            await task;
        }
        catch
        {
            // ignored
        }

        var propertyChanged = PropertyChanged;
        if (propertyChanged == null) return;

          propertyChanged(this, new PropertyChangedEventArgs("Status"));
        propertyChanged(this, new PropertyChangedEventArgs("IsCompleted"));
        propertyChanged(this, new PropertyChangedEventArgs("IsNotCompleted"));

        if (task.IsCanceled)
        {
            propertyChanged(this, new PropertyChangedEventArgs("IsCanceled"));
        }
        else if (task.IsFaulted)
        {
            propertyChanged(this, new PropertyChangedEventArgs("IsFaulted"));
            propertyChanged(this, new PropertyChangedEventArgs("Exception"));
            propertyChanged(this, new PropertyChangedEventArgs("InnerException"));
            propertyChanged(this, new PropertyChangedEventArgs("ErrorMessage"));
        }
        else
        {
            propertyChanged(this, new PropertyChangedEventArgs("IsSuccessfullyCompleted"));
            propertyChanged(this, new PropertyChangedEventArgs("Result"));
        }
    }
}
```

5. Use the NotifyTaskCompletion class

You need to change the type of the AllEvents property from the EventCatalogSingleton so that it becomes a Task.

You need also to add a new property called DefaultValues, which will serve to initialize the AllEvents property when there are no events saved in the Storage file.

``` csharp
public NotifyTaskCompletion<ObservableCollection<Event>> AllEvents { get; }

private ObservableCollection<Event> DefaultCollection { get; } =
  new ObservableCollection<Event>
  {
      new Event(1, "Wedding", "John's wedding", "Paris", new DateTime(2005,04,30)),
      new Event(2, "Football Match", "The new match", "London", new DateTime(1998,07,01)),
      new Event(3, "Shopping", "From the local market", "Copenhagen", new DateTime(2007,09,26))
  };
```

6. Add Load and Save methods

In the EventCatalogSingleton add two methods: one that can Load events and one that can Save the events using the PersistencyService. 

Also, call the Save method from the AddEvent method so that new changes are persisted.

``` csharp
public async Task<ObservableCollection<Event>> LoadEvents()
{
    var events = await Persistency.PersistencyService.LoadEventsFromJsonAsync();
    return events?.Count == 0 ? DefaultCollection : new ObservableCollection<Event>(events);
}

public async Task SaveEventsAsync()
{
    var events = new List<Event>(AllEvents.Result);
    await Persistency.PersistencyService.SaveEventsAsJsonAsync(events);
}

public async Task AddEvent(Event newEvent)
{
    AllEvents.Result.Add(newEvent);
    await SaveEventsAsync();
}
```

7. Initialize the collection with data

Remove the code from the constructor of the EventCatalogSingleton and inistantiate there the AllEvents property by calling the LoadEvents() method.

Also, modify the ItemsSource of the ListView control so that it can bind to the AllEvents.Result.

``` csharp
private EventCatalogSingleton()
{
    AllEvents = new NotifyTaskCompletion<ObservableCollection<Event>>(LoadEvents());
}
```

``` xml
<ListView ItemsSource="{x:Bind ViewModel.CatalogSingleton.AllEvents.Result, Mode=OneWay}" HorizontalAlignment="Center">
```

8. Make the method from the Handler Async

You need to change the signature of the CreateEvent method from the EventHandler so that it runs asynchronously.

``` csharp
public async Task CreateEvent()
{
    var date =  DateTimeConverter.
        DateTimeOffsetAndTimeSetToDateTime(EventViewModel.Date, EventViewModel.Time);
    var newEvent = EventViewModel.NewEvent;
    newEvent.DateTime = date;
    await EventViewModel.CatalogSingleton.AddEvent(newEvent);
}
```

### Part D - Removing events

1. Bind to the SelectedItem

In addition to those two methods, you also need a new property called SelectedEvent of type Event in the EventViewModel. To this property you have to bind the SelectedItem of the ListView from the EventsPage.

``` csharp
private Event _selectedEvent;
public Event SelectedEvent
{
    get { return _selectedEvent; }
    set { _selectedEvent = value; OnPropertyChanged(); }
}
```

``` xml
<ListView ItemsSource="{Binding CatalogSingleton.AllEvents, Mode=TwoWay}" SelectedItem="{Binding SelectedEvent, Mode=TwoWay}"
```

2. Add Delete methods

Create a DeleteEvent method in the EventHandler class and a RemoveEvent method in the EventCatalogSingleton. The DeleteEvent method has to call the RemoveEvent method for the delete operation. 

Remember to save the changes in the JSON file.

``` csharp
public async Task DeleteEvent()
{
    var selectedEvent = EventViewModel.SelectedEvent;
    await EventViewModel.CatalogSingleton.RemoveEvent(selectedEvent);
}
```

``` csharp
public async Task RemoveEvent(Event selectedEvent)
{
    AllEvents.Remove(selectedEvent);
    await SaveEventsAsync();
}
```

3. Bind the Delete button
Bind the Delete button from the EventsPage to the DeleteEvent method
from the EventHandler by using {x :Bind}.

``` xml
<AppBarButton Icon="Delete" Label="Delete Event"  Click="{x:Bind ViewModel.EventHandler.DeleteEvent}"/>
```

*4. Alternative path with RelayCommand

`{x: Bind}` markup extension offers the possibility of binding to methods. This technique is called event binding, but the same functionality can be obtained by using Commands.

Add the RelayCommand class to the Common folder.

``` csharp
public class RelayCommand : ICommand
{
    private readonly Action _execute;
    private readonly Func<bool> _canExecute;

    /// <summary>
    /// Raised when RaiseCanExecuteChanged is called.
    /// </summary>
    public event EventHandler CanExecuteChanged;

    /// <summary>
    /// Creates a new command that can always execute.
    /// </summary>
    /// <param name="execute">The execution logic.</param>
    public RelayCommand(Action execute)
        : this(execute, null)
    {
    }

    /// <summary>
    /// Creates a new command.
    /// </summary>
    /// <param name="execute">The execution logic.</param>
    /// <param name="canExecute">The execution status logic.</param>
    public RelayCommand(Action execute, Func<bool> canExecute)
    {
        if (execute == null)
            throw new ArgumentNullException(nameof(execute));

        _execute = execute;
        _canExecute = canExecute;
    }
    /// <summary>
    /// Determines whether this <see cref="RelayCommand"/> can execute in its current           
    /// state.
    /// </summary>
    /// <param name="parameter">
    /// Data used by the command. If the command does not require data to be passed, 
    /// this object can be set to null.
    /// </param>
    /// <returns>true if this command can be executed; otherwise, false.</returns>
    public bool CanExecute(object parameter)
    {

        return _canExecute?.Invoke() ?? true;
    }

    /// <summary>
    /// Executes the <see cref="RelayCommand"/> on the current command target.
    /// </summary>
    /// <param name="parameter">
    /// Data used by the command. If the command does not require data to be passed,            
    /// this object can be set to null.
    /// </param>
    public void Execute(object parameter)
    {
        _execute();
    }

    /// <summary>
    /// Method used to raise the <see cref="CanExecuteChanged"/> event
    /// to indicate that the return value of the <see cref="CanExecute"/>
    /// method has changed.
    /// </summary>
    public void RaiseCanExecuteChanged()
    {
        var handler = CanExecuteChanged;
        handler?.Invoke(this, EventArgs.Empty);
    }
}
```

*5. Add an ICommand property

Declare a property called DeleteEventCommand of type ICommand in the EventViewModel class and initialize it so that it can call the DeleteEvent from the EventHandler class through the RelayCommand.

``` csharp
private ICommand _deleteEventCommand;
public ICommand DeleteEventCommand
{
    get
    {
        return _deleteEventCommand ?? (_deleteEventCommand = new RelayCommand(
          async () =>
          {
              await EventHandler.DeleteEvent();
          }));
    }
}
```

*6. Binding to Commands

Similary with the Navigation, we need to open the EventsPage in Blend to be able to add Commands. Click on the Delete button, then go to the Assets window and select Behaviors. If it’s not installed, then install the Behaviors NuGet package. 

Select the InvokeCommandAction, then go and set the DataBinding source for the Command property to be the DeleteEventCommand.

``` xml
xmlns:interactivity="using:Microsoft.Xaml.Interactivity" 
xmlns:core="using:Microsoft.Xaml.Interactions.Core"
```

``` xml
<AppBarButton Icon="Delete" Label="Delete Event">
    <interactivity:Interaction.Behaviors>
        <core:EventTriggerBehavior EventName="Click">
            <core:InvokeCommandAction 
              Command="{x:Bind ViewModel.DeleteEventCommand}"/>
        </core:EventTriggerBehavior>
    </interactivity:Interaction.Behaviors>
</AppBarButton>
```

*7. Binding to Commands 2
There is another way to bind to command which is a more direct approach. But, using this approach you won’t be able in the future to bind to more than one command from a control. The button control has a Command property which can be used as the Binding Target for the command from the EventViewModel.

I recommend the first approach due to the fact that it makes your code extensible. 

::: tip
The CommandParameter you can either bind to the SelectedEvent property declared in the EventViewModel or directly to the SelectedItem property of the ListView control.
:::

``` xml
<AppBarButton Icon="Delete" Label="Delete Event"
  Command="{x:Bind ViewModel.DeleteEventCommand, }" 
  CommandParameter="{Binding SelectedItem, ElementName=EventsListView}"/>
```

### Part E - Adding extra features

1. Adding a Details View 

You can display all the details of the Event objects in the ListView. 

But that takes up a lot of space. Instead, you can show just enough data in the item to identify it and then, when the user makes a selection, you can display all the details of the selected item in a separate piece of UI known as the details view. 

First, you need to add a CollectionViewSource as a page resource. 

``` xml
<Page.Resources>
    <CollectionViewSource x:Name="EventsCollection" 
        Source="{x:Bind ViewModel.CatalogSingleton.AllEvents.Result, Mode=OneWay}"
        />
    ...
</Page.Resources>
```

2. Binding to CollectionViewSource

When using CollectionViewSource, you have to bind both the ListView and the details view to the it. 

Note that by binding the details view directly to the CollectionViewSource, you're implying that you want to bind to the current item in bindings where the path cannot be found on the collection itself. (There's no need to specify the CurrentItem property as the path for the binding, although you can do that if there's any ambiguity because this XAML control will take care of the currently-selected item for you).

``` xml
<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
    <StackPanel Margin="10">
        <TextBlock Text="EventMaker" FontFamily="Calibri" FontSize="26" FontWeight="Light"
                    HorizontalAlignment="Center"></TextBlock>

        <ListView x:Name="EventsListView" Margin="30"
              ItemsSource="{Binding Source={StaticResource EventsCollection}}"
              SelectedItem="{Binding SelectedEvent, Mode=TwoWay}"
              HorizontalAlignment="Center">
            <ListView.ItemTemplate>
                <DataTemplate x:DataType="model:Event">
                    <StackPanel Margin="20" Orientation="Horizontal">
                        <SymbolIcon Symbol="Calendar" Margin="0,0,12,0" />
                        <TextBlock Text="{x:Bind Id, Mode=OneWay}" Margin="0,0,10,0"></TextBlock>
                        <TextBlock Text="{x:Bind Name, Mode=OneWay}" Margin="10,0,10,0"></TextBlock>
                    </StackPanel>
                </DataTemplate>
            </ListView.ItemTemplate>
        </ListView>

        <StackPanel Margin="20" Padding="10" VerticalAlignment="Bottom"
                BorderBrush="Black"
                BorderThickness="1"
                DataContext="{Binding Source={StaticResource EventsCollection}}"
                d:DataContext="{d:DesignInstance model:Event}" 
                HorizontalAlignment="Center">
            <TextBlock Text="{Binding Place}"></TextBlock>
            <TextBlock Text="{Binding Description}"/>
            <TextBlock Text="{Binding DateTime,
                    Converter={StaticResource DateTimeValueConverter},
                    ConverterParameter=Date: \{0:d\}}" />
        </StackPanel>
    </StackPanel>
</Grid>
```

*3. Alternative Path

Instead of using CollectionViewSource, you can directly bind the DataContext of the details view to the SelectedItem of the ListView.
You have to name the ListView and then, in the DataContext you have to bind to the SelectedItem property by using the ElementName property.

Resharper gave me some warnings in the XAML view because the design-time view of the control didn’t know what type its DataContext was. So I added the d: DesignInstance to help define the type of the bound object.

``` xml
<Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
    <StackPanel Margin="10">
        <TextBlock Text="EventMaker" FontFamily="Calibri" FontSize="26" FontWeight="Light"
                    HorizontalAlignment="Center"></TextBlock>

        <ListView x:Name="EventsListView" Margin="30"
              ItemsSource="{x:Bind ViewModel.CatalogSingleton.AllEvents.Result, Mode=OneWay}"
              SelectedItem="{Binding SelectedEvent, Mode=TwoWay}"
              HorizontalAlignment="Center">
            <ListView.ItemTemplate>
                <DataTemplate x:DataType="model:Event">
                    <StackPanel Margin="20" Orientation="Horizontal">
                        <SymbolIcon Symbol="Calendar" Margin="0,0,12,0" />
                        <TextBlock Text="{x:Bind Id, Mode=OneWay}" Margin="0,0,10,0"></TextBlock>
                        <TextBlock Text="{x:Bind Name, Mode=OneWay}" Margin="10,0,10,0"></TextBlock>
                    </StackPanel>
                </DataTemplate>
            </ListView.ItemTemplate>
        </ListView>

        <StackPanel Margin="20" Padding="10" VerticalAlignment="Bottom"
                BorderBrush="Black"
                BorderThickness="1"
                DataContext="{Binding SelectedItem, ElementName=recordingsListView}" 
                d:DataContext="{d:DesignInstance model:Event}"  
                HorizontalAlignment="Center">
            <TextBlock Text="{Binding Place}"></TextBlock>
            <TextBlock Text="{Binding Description}"/>
            <TextBlock Text="{Binding DateTime,
                    Converter={StaticResource DateTimeValueConverter},
                    ConverterParameter=Date: \{0:d\}}" />
        </StackPanel>
    </StackPanel>
</Grid>
```

4. Add a ProgressRing control

By implementing the NotifyTaskCompletion<TResult>, we are now able to add the ProgressRing control and bind its IsActive property to the AllEvents.IsNotCompleted property.

``` xml
<ProgressRing Width="60" Height="60" 
  Foreground="{StaticResource SystemControlBackgroundAccentBrush}"
  IsActive="{x:Bind ViewModel.CatalogSingleton.AllEvents.IsNotCompleted, Mode=OneWay}"
  VerticalAlignment="Center"
  HorizontalAlignment="Center"></ProgressRing>
```

5. TODO:
Add also pictures with the Layout of the two Pages from the Designer.
And create slide-description for the next slide-code.

``` xml
<Grid>
  <!-- Busy indicator -->
  <TextBlock Text="Loading..." 
              Visibility="{Binding CatalogSingleton.Instance.AllEvents.IsNotCompleted,
                          Converter={StaticResource BooleanToVisibilityConverter}}"/>
  <!-- Results -->
  <TextBlock Text="{Binding UrlByteCount.Result}" 
              Visibility="{Binding UrlByteCount.IsSuccessfullyCompleted,
Converter={StaticResource BooleanToVisibilityConverter}}"/>
  
  <!-- Error details -->
  <TextBlock Text="{Binding UrlByteCount.ErrorMessage}" Foreground="Red"
Visibility="{Binding UrlByteCount.IsFaulted,
Converter={StaticResource BooleanToVisibilityConverter}}"/>
</Grid>
```

``` csharp
public int Id { get; set; }
public string Title { get; set; }
public string Description { get; set; }
public DateTime Date { get; set; }

private static int _count = 1;

public Note()
{
    Id = _count++;
    Title = string.Empty;
    Description = string.Empty;
    Date = DateTime.Now;
}

public Note(string title, string description)
{
    Id = _count++;
    Title = title;
    Description = description;
    Date = DateTime.Now;
}
```

6. Drag and Drop
CanDragItems
DragItemsStarting
AllowDrop
CanReorderItems
CanDragItems
DragOver
Drop
DragItemsStarting
DragItemsCompleted

### Finish
For the entire code, please download the solution from GitHub.
If you don’t have a subscription, you won’t be able to access this link because it leads to a private repository. You can apply for a monthly subscription on my website.
I hope that you had a great time coding :)

Tasks:
- go through all the code and remake the app
- go through the old code to get Drag&Drop features


### RESTful Web Service
Lab: EventMakerWebservice

The starting point is your final version of the EventMaker from week the start of the semester.

1. Make a Database EventDB with a table Event, - the table must have the same attributes (name / type) as properties of the class Event in Event Maker.

2. Add some events to the database table directly in Server Explorer.

3. Add a new ASP.net - project (EventWS) to your EventMaker solution and generate Context and Controller for the project, to get access to the database via web service. (Remember: No-authentication and base.Configuration.ProxyCreationEnabled = false;)

4. Test the webservice in the browser to see if you can list the events in the Event table.

5. Create a client console project and test if the webservice can be accessed from the client-side. (Remember: nuget: Web API client).

6. Win 10 Universial app. Makes change in Event Makers method PersistensService, so that it uses a database instead of serialized data files.

Check out the projects.

