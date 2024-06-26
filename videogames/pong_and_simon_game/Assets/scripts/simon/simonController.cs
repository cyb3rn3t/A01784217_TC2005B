/*
 * Manages the flow of the game
 * Keep track of the turn, and the list of buttons to press
 * 
 * Nicole D�vila
 * 24-04-2024
 */

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class simonController : MonoBehaviour
{
    [SerializeField] List<simonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool playerTurn = false;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;
    [SerializeField] int numButtons;
    [SerializeField] int counter = 0;
    [SerializeField] levelText levelTextComponent;
    [SerializeField] TextMeshProUGUI gameOverText;

    bool gameIsOver = false;


    // Start is called before the first frame update
    void Start()
    {
        // Configure the buttons to be used in the game
        PrepareButtons();
        gameOverText = GameObject.Find("Game Over Text").GetComponent<TextMeshProUGUI>();
    }

    // Configure the callback functions for the buttons
    void PrepareButtons()
    {
        for (int i = 0; i < numButtons; i++)
        {
            int index = i;
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);

            buttons.Add(newButton.GetComponent<simonButton>());
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));

            newButton.GetComponent<Image>().color = Color.HSVToRGB((float)index / numButtons, 1, 1);
            newButton.GetComponent<simonButton>().Init(index);
        }
        // Start the game by adding the first button
        AddToSequence();
    }

    // Main function to validate that the button pressed by the user 
    // corresponds with the sequence generated by the CPU
    public void ButtonPressed(int index)
    {
        if (playerTurn)
        {
            if (index == sequence[counter++])
            {
                // highlight the button selected by the player
                buttons[index].Highlight();
                if (counter == sequence.Count)
                {
                    // Finish the player turn to ensure no other actions are
                    // taken into account
                    playerTurn = false;
                    incrementLevel(); // was level++
                    counter = 0;
                    AddToSequence();
                }
            }
            else
            {
                // Call game over condition check here
                CheckGameOver();
                Debug.Log("Game Over!");
            }
        }
    }

    void incrementLevel()
    {
        level++;
        levelTextComponent.UpdateText(level, gameIsOver);
    }

    // Add another number to the sequence and display it
    void AddToSequence()
    {
        // Add a new button to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    // Display every button in the sequence so far
    IEnumerator PlaySequence()
    {
        // Add an initial delay before showing the sequence
        yield return new WaitForSeconds(delay);
        foreach (int index in sequence)
        {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);
        }
        // Switch the turn over to the player
        playerTurn = true;
    }

    // Check for game over condition
    void CheckGameOver()
    {
        // Implement your game over condition here
        // For example, if the player makes a mistake, the game is over
        gameIsOver = true;
        UpdateText(); // Update text to display "Game Over"
        // Other game over actions...
    }

    // Update is called once per frame
    void Update()
    {
        // Check for game over condition
        // You may want to call this in a more efficient way based on your game's structure
        if (!gameIsOver && Input.GetKeyDown(KeyCode.Escape))
        {
            CheckGameOver();
        }
    }
    // Update the text based on the current level and game over status
    void UpdateText()
    {
        if (gameIsOver)
        {
            levelTextComponent.UpdateText(level, gameIsOver);
            gameOverText.text = "Game Over";
        }
        else
        {
            levelTextComponent.UpdateText(level, gameIsOver);
            gameOverText.text = "";
        }
    }



    // Call this method whenever you need to update the text
    void SomeMethodToUpdateText()
    {
        UpdateText();
    }
}
